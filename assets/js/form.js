const form = document.getElementById('my-blog');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('uname').value;
    const blogTitle = document.getElementById('btitle').value;
    const content = document.getElementById('content').value;

    localStorage.setItem('username', username);
    localStorage.setItem('blogTitle', blogTitle);
    localStorage.setItem('content', content);

    window.open("blog.html", "_self");
})

