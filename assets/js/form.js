const form = document.getElementById('my-blog');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const blogs = JSON.parse(localStorage.getItem('blogs')) || []

    const username = document.getElementById('uname').value;
    const blogTitle = document.getElementById('btitle').value;
    const content = document.getElementById('content').value;

    const formData = {
        username,
        blogTitle,
        content
    }

    blogs.push(formData)
    localStorage.setItem("blogs", JSON.stringify(blogs))

    // old code
    // localStorage.setItem('username', username);
    // localStorage.setItem('blogTitle', blogTitle);
    // localStorage.setItem('content', content);
    

    window.open("blog.html", "_self");
})
