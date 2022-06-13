let imgsArr = document.querySelectorAll(".work .img img");
let expandImg = document.querySelector(".expand-img");
let img = document.querySelector(".expand-img img");
let overlay = document.querySelector(".expand-img .overlay");
let closeBtn = document.querySelector(".expand-img i");
let currentImgSrc = "";

for (var i = 0; i < imgsArr.length; i++) {
    imgsArr[i].addEventListener("click", function () {
        currentImgSrc = this.currentSrc;
        document.querySelector(".expand-img .img").innerHTML = `
        <img src="${currentImgSrc}" alt="">
        `;
        expandImg.classList.add("active");
    });
}

function removeActiveClass() {
    expandImg.classList.remove("active");
}

overlay.addEventListener("click", removeActiveClass);

closeBtn.addEventListener("click", removeActiveClass);
