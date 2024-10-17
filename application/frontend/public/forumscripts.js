// forumscript.js
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    const topic = document.getElementById('topic').value;
    const postContent = document.getElementById('postContent').value;

    // Validate inputs
    if (topic.trim() === "" || postContent.trim() === "") {
        alert("Please fill out both fields!");
        return;
    }

    // Create a new list item for the post
    const postItem = document.createElement('li');
    postItem.innerHTML = `
        <div class="post-author">${topic}</div>
        <div class="post-content">${postContent}</div>
    `;

    // Append the post to the posts list
    document.getElementById('postsList').appendChild(postItem);

    // Clear the form
    document.getElementById('topic').value = '';
    document.getElementById('postContent').value = '';
});