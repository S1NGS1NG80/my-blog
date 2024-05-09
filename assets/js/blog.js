const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
});

// Select the container where you want to display the blogs
const container = document.getElementById("data");

// Retrieve the array of blogs from localStorage
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// Loop over each blog entry in the array
blogs.forEach(blog => {
    // Create elements to display the blog data
    const usernameElement = document.createElement("p");
    usernameElement.textContent = "Username: " + blog.username;

    const titleElement = document.createElement("p");
    titleElement.textContent = "Blog Title: " + blog.blogTitle;

    const contentElement = document.createElement("p");
    contentElement.textContent = "Content: " + blog.content;

    // Append the elements to the container
    container.appendChild(usernameElement);
    container.appendChild(titleElement);
    container.appendChild(contentElement);
});