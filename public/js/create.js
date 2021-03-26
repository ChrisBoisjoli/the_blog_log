const create = async (event) => {
    event.preventDefault();

    // Trim and get the values of the title and post_body.
    const title = document.querySelector('#title').value.trim();
    const postBody = document.querySelector('#postBody').value.trim();

    // If title and content exist, go to post.
    if (title && postBody) {
        const response = await fetch('/dashboard/', 
        {
            method: 'POST',
            body: JSON.stringify({ title, postBody }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If everything is ok, replace with /dashboard.
        if (response.ok) {
            alert('New Post Created!');
            document.location.replace('/dashboard/dashboard');
        }
        else {
            alert('Post failed.');
        }
    }
};


document.querySelector('#create').addEventListener('click', create);