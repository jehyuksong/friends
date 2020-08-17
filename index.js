const jehyuk = document.querySelector(".image-jehyuk");
const gosu = document.querySelector(".image-gosu");
const mainTitle = document.querySelector("h1");
const subTitle = document.querySelector(".comment");

function makeSound() {
  let gosupick = new Audio("sounds/비명.mp3");
  gosupick.play();
}

function thanksText() {
  mainTitle.innerHTML = "감사합니다ㅎㅎ";
  subTitle.innerHTML = "감사합니다ㅎㅎ";
}

function badText() {
  mainTitle.innerHTML = "벌이닷!";
  subTitle.innerHTML = "벌이닷!";
}

function changeImage() {
  if (jehyuk.getAttribute("src") === "images/제혁.png") {
    jehyuk.setAttribute("src", "images/제혁픽.png");
    jehyuk.classList.add("bigger");
    thanksText();
  } else {
    jehyuk.setAttribute("src", "images/제혁.png");
  }
}

function changeImage2() {
  if (gosu.getAttribute("src") === "images/고수.png") {
    gosu.setAttribute("src", "images/고수픽.png");
    gosu.classList.add("bigger");
    badText();
  } else {
    gosu.setAttribute("src", "images/고수.png");
  }
}
