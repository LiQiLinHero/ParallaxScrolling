const imgs = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
];
const container = document.querySelector('.scroll-container');
let curIndex = 0;
function getPrevIndex() {
    return curIndex === 0 ? imgs.length - 1 : curIndex - 1;
}
function getNextIndex() {
    return curIndex === imgs.length - 1 ? 0 : curIndex + 1;
}
function createElement(i) {
    const div = document.createElement('div');
    div.className = 'item';
    const img = document.createElement('img');
    img.src = imgs[i];
    div.appendChild(img);
    container.appendChild(div);
    return div;
}
function resetElements() {
    container.innerHTML = '';
    const prevIndex = getPrevIndex();
    const nextIndex = getNextIndex();
    createElement(prevIndex).classList.add('prev');
    createElement(curIndex).classList.add('cur');
    createElement(nextIndex).classList.add('next');
}

resetElements();
let isAnimation = false;
window.addEventListener('wheel', (e) => {
    if (!e.deltaY || isAnimation) {
        return;
    }
    isAnimation = true;
    if (e.deltaY > 0) {
        curIndex = getNextIndex();
        container.classList.add('scroll-down');
    } else {
        curIndex = getPrevIndex();
        container.classList.add('scroll-up');
    }
});

container.addEventListener('transitionend', () => {
    container.classList.remove('scroll-down');
    container.classList.remove('scroll-up');
    isAnimation = false;
    resetElements();
});
