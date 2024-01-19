// client/app.js
document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts-container");
  const usersContainer = document.getElementById("users-container");

  // Fetch posts
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((posts) => {
      postsContainer.innerHTML = "<h2>Posts</h2>";
      posts.forEach((post) => {
        postsContainer.innerHTML += `<div><strong>${post.title}</strong><p>${post.content}</p></div>`;
      });
    });

  // Fetch users
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      usersContainer.innerHTML = "<h2>Users</h2>";
      users.forEach((user) => {
        usersContainer.innerHTML += `<div><strong>${user.name}</strong><p>Email: ${user.email}</p></div>`;
      });
    });
});
