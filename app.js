const correctanswers = ["B", "B", "B", "B"];
const form = document.querySelector(".form-quiz");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user input
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Process Score
  userAnswers.forEach((answers, index) => {
    if (answers === correctanswers[index]) {
      score += 25;
    }
  });
  // show result on page
  scrollTo(0, 0);
  result.classList.remove("d-none");
  // result.querySelector("span").textContent = `${score}%`;

  // Animation on Time
  let output = 0;
  let timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  // // window object (Global Object)
  // setTimeout(() => {
  //   alert("Hello World");
  // }, 3000);
});

// setInterval(() => {
//   console.log("hello");
// }, 2000);
