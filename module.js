
const button = document.getElementById('click-me');
const first_color = chroma.random().hex();
const hex_view = document.getElementById("color_result")
hex_view.innerText = first_color
document.body.style.backgroundColor = first_color
button.addEventListener('click', () => {
    const color = chroma.random().hex();
    hex_view.innerText = color
    document.body.style.backgroundColor = color;
});
