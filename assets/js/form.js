

const form = document.querySelector('#my-blog');
const elements = form.elements;

localStorage.setItem('form', JSON.stringify(form));

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const fd = new FormData(form);
//     const obj = Object.fromEntries(fd);
    
//     const json = JSON.stringify(obj);
//     localStorage.setItem('form', json);

//     window.location.href = "blog.html";
// })

