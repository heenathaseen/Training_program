const container = document.querySelector(".container");
const imgArray = [
    "images/d.jpg",
    "images/e.jpg",
    "images/f.jpg",
    "images/g.jpg",
    "images/h.jpg",
    "images/i.jpg",
    "images/j.jpg",
    "images/k.jpg",
    "images/l.jpg",
    "images/m.jpg",
    "images/n.jpg",
    "images/o.jpg",
    "images/p.jpg",
    "images/q.jpg",
    "images/r.jpg",
    "images/s.jpg",
    "images/t.jpg"
]

function loadImages(numImages = 5) {
    let i = 0;
    while (i < numImages) {
        const img = document.createElement("img");
        img.src = `${imgArray[i]}`;
        // imgArray[i] = Math.floor(Math.random() * 100)
        container.appendChild(img);
        i++;
    }
}


window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        let random = Math.floor(Math.random() * imgArray.length);
        loadImages(random);
    }
})

loadImages();