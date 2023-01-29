const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme");

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    // pegar estilo do css
    bg: getStyle(html, "--bg"),
    colorText: getStyle(html, "--color-text"),
    filterImg: getStyle(html, "--filter-img")
}

const darkMode = {
    bg: "black",
    colorText: "white",
    filterImg: "invert(100%)"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
});