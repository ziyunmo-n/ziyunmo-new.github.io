function getRandomBackground() {
    const images = [];
    // 假设图片名为 1.jpg 到 10.jpg，按需修改范围
    for (let i = 1; i <= 9; i++) {
        images.push(`img/${i}.jpg`);
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
}
window.onload = getRandomBackground;

