const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
});

const userNameText = document.querySelector("#uname");
const blogTitleText = document.querySelector("btitle");

const json = localStorage.getItem('form');
const obj = JSON.parse(json);

for (key in obj) {
    const markup = `
    <div>
        <span>${key}: ${obj[key]}</span>
    </div>
    `;
    document.getElementById('data').innerHTML += markup;
}