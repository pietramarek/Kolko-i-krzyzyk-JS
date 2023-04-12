const winingArray1 = [];
const winingArray2 = [];
//reset strony
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  window.location.reload(true);
});

let figures = document.querySelector(".figure");
let click = document.querySelectorAll(".figure");

let i = 0;
let znak = "X";

click.forEach((figures, index) => {
  figures.addEventListener("click", () => {
    figures.append(znak);
    i++;
    if (i === 1 || i === 3 || i === 5 || i === 7) {
      znak = "O";
      winingArray1.push(index);
    } else {
      znak = "X";
      winingArray2.push(index);

      console.log(winingArray1);
      console.log(i);
      console.log(winingArray2);
    }
  });
});

figures.addEventListener("click", () => {
  if (
    winingArray1.includes(0) &&
    winingArray1.includes(1) &&
    winingArray1.includes(2)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  } else if (
    winingArray1.includes(3) &&
    winingArray1.includes(4) &&
    winingArray1.includes(5)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  } else if (
    winingArray1.includes(6) &&
    winingArray1.includes(7) &&
    winingArray1.includes(8)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  } else if (
    winingArray1.includes(0) &&
    winingArray1.includes(3) &&
    winingArray1.includes(6)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  } else if (
    winingArray1.includes(1) &&
    winingArray1.includes(4) &&
    winingArray1.includes(7)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  } else if (
    winingArray1.includes(2) &&
    winingArray1.includes(5) &&
    winingArray1.includes(8)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  } else if (
    winingArray1.includes(0) &&
    winingArray1.includes(4) &&
    winingArray1.includes(8)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  } else if (
    winingArray1.includes(2) &&
    winingArray1.includes(4) &&
    winingArray1.includes(6)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś X");
  }
});

document.addEventListener("click", () => {
  if (
    winingArray2.includes(0) &&
    winingArray2.includes(1) &&
    winingArray2.includes(2)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
    return;
  } else if (
    winingArray2.includes(3) &&
    winingArray2.includes(4) &&
    winingArray2.includes(5)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
  } else if (
    winingArray2.includes(6) &&
    winingArray2.includes(7) &&
    winingArray2.includes(8)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
  } else if (
    winingArray2.includes(0) &&
    winingArray2.includes(3) &&
    winingArray2.includes(6)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
  } else if (
    winingArray2.includes(1) &&
    winingArray2.includes(4) &&
    winingArray2.includes(7)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
  } else if (
    winingArray2.includes(2) &&
    winingArray2.includes(5) &&
    winingArray2.includes(8)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
  } else if (
    winingArray2.includes(0) &&
    winingArray2.includes(4) &&
    winingArray2.includes(8)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
  } else if (
    winingArray2.includes(2) &&
    winingArray2.includes(4) &&
    winingArray2.includes(6)
  ) {
    win = 1;
    let input = document.querySelector(".input");
    input.append("Wygrałeś O");
  }
});
