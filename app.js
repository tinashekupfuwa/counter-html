const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");
let counterDigit = document.querySelector(".counter");

let count = 0;

// incrementButton.addEventListener("click", () => {
//   if (count < 10) {
//     count++;
//     counterDigit.innerText = count;
//   }
// });

decrementButton.addEventListener("click", () => {
  if (count > 1) {
    count = count - 1;
    counterDigit.innerText = count;
  }
});

incrementButton.addEventListener("click", () => {
  let currentCount = parseInt(counterDigit.innerText) || 0;
  counterDigit.innerText = currentCount + 1;
});

decrementButton.addEventListener("click", () => {
  let currentCount = parseInt(counterDigit.innerText) || 0;
  counterDigit.innerText = currentCount - 1;
});
