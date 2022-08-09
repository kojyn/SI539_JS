const figure = document.querySelectorAll("figure");

for (let i = 0; i < figure.length; i++) {
    figure[i].classList.add('one-third');  
}

const footer = document.querySelector("footer");
footer.addEventListener('click', () => {
    footer.remove();
})

const fifth = document.querySelectorAll("figure")[4];

fifth.addEventListener('dblclick', (event) => {
    fifth.style.visibility = "hidden";
})

const firstfig = document.querySelectorAll("figure")[0];
const firstfigcap = document.querySelectorAll("figcaption")[0];
firstfig.addEventListener('mouseenter', () => {
    firstfigcap.setAttribute('style', 'font-family: Cursive;');
})
firstfig.addEventListener('mouseleave', () => {
    firstfigcap.removeAttribute('style');
})

firstfigcap.setAttribute('tabindex', 1);
firstfigcap.addEventListener('focus', () => {
    firstfigcap.setAttribute('style', 'font-family: Cursive;');
})
firstfigcap.addEventListener('blur', () => {
    firstfigcap.removeAttribute('style');
})


