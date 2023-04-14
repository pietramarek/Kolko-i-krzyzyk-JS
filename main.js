let winingArray1 = [];
let winingArray2 = [];
//reset strony------------------
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  window.location.reload(true);
});
//---------------------------------------

let figures = document.querySelector(".figure");
let click = document.querySelectorAll(".figure");
let input = document.querySelector(".input");
let i = 0;

//------------------------------------------------

click.forEach((figures, index) => {
  figures.addEventListener("click", () => {
    console.log(i);

    if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
      var znak = "O";
      figures.append(znak);
      winingArray1.push(index);
      console.log(winingArray1);
      console.log(winingArray2);
      i++;
      console.log(i);
    } else if (i === 1 || i === 3 || i === 5 || i === 7) {
      var znak = "X";
      figures.append(znak);
      winingArray2.push(index);
      i++;
      console.log(winingArray1);
      console.log(winingArray2);
    }

    if (
      (winingArray1.includes(0) &&
        winingArray1.includes(1) &&
        winingArray1.includes(2)) ||
      (winingArray1.includes(3) &&
        winingArray1.includes(4) &&
        winingArray1.includes(5)) ||
      (winingArray1.includes(6) &&
        winingArray1.includes(7) &&
        winingArray1.includes(8)) ||
      (winingArray1.includes(0) &&
        winingArray1.includes(3) &&
        winingArray1.includes(6)) ||
      (winingArray1.includes(1) &&
        winingArray1.includes(4) &&
        winingArray1.includes(7)) ||
      (winingArray1.includes(2) &&
        winingArray1.includes(5) &&
        winingArray1.includes(8)) ||
      (winingArray1.includes(0) &&
        winingArray1.includes(4) &&
        winingArray1.includes(8)) ||
      (winingArray1.includes(2) &&
        winingArray1.includes(4) &&
        winingArray1.includes(6))
    ) {
      input.append("Wygrałeś O");
    } else if (
      (winingArray2.includes(0) &&
        winingArray2.includes(1) &&
        winingArray2.includes(2)) ||
      (winingArray2.includes(3) &&
        winingArray2.includes(4) &&
        winingArray2.includes(5)) ||
      (winingArray2.includes(6) &&
        winingArray2.includes(7) &&
        winingArray2.includes(8)) ||
      (winingArray2.includes(0) &&
        winingArray2.includes(3) &&
        winingArray2.includes(6)) ||
      (winingArray2.includes(1) &&
        winingArray2.includes(4) &&
        winingArray2.includes(7)) ||
      (winingArray2.includes(2) &&
        winingArray2.includes(5) &&
        winingArray2.includes(8)) ||
      (winingArray2.includes(0) &&
        winingArray2.includes(4) &&
        winingArray2.includes(8)) ||
      (winingArray2.includes(2) &&
        winingArray2.includes(4) &&
        winingArray2.includes(6))
    ) {
      input.append("Wygrałeś X");
    }
  });
});
