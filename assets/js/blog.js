const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
});

const username = localStorage.getItem('username');
const blogTitle = localStorage.getItem('blogTitle');
const content = localStorage.getItem('content');

// console.log(username, blogTitle, content);

// displays user info and content
document.getElementById("username").textContent = username;
document.getElementById("blogTitle").textContent = blogTitle;
document.getElementById("content").textContent = content;

