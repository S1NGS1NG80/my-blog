const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
});

// const username = localStorage.getItem('username');
// const blogTitle = localStorage.getItem('blogTitle');
// const content = localStorage.getItem('content');

const blogs = JSON.parse(localStorage.getItem("blogs"))
console.log(blogs)


//need to loop over the blogs array



// document.createElement