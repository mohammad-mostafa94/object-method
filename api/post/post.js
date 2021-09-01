function postsFunc() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => displayPosts(data));
}
function displayPosts(data) {
   const newPost= document.getElementById("newPosts");
    for (const post of data) {
        const div = document.createElement("div");
        div.classList.add('posts');
        div.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>`;
        newPost.appendChild(div);
    }
}