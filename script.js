let ansArr = [];
$(document).ready(function () {
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (data) {
    console.log(data);
    for (let i = 0, j = 1; i < data.length; i++, j++) {
      let quizQues = `
        <div class="quesCard">
            <div class="ques">
              <span >Q${j}. ${data[i].question}</span>
            </div>
            <div class="ops"></div>`;

      let optionsArr = data[i].options;
      console.log(optionsArr);

      for (let k = 0; k < optionsArr.length; k++) {
        let quizOps = `
      <div class='ops'>
        <label class="option">
            <input type='radio' class="radioBtn" name='option${i}' value='${k + 1}'/>
            <span>${optionsArr[k]}</span>
        </label>
      </div>
      `;

        quizQues += quizOps;

        $("#quesCard").append(quizOps);
      }

      $("#quizApp").append(quizQues);

      ansArr.push(data[i].answer);
    }

    var button = `
        <div class="btn"><button id="submit" onclick='result()'>Submit</button></div>
        `;

    $("#quizApp").append(button);
  });
});

function result() {
  let ans = $("input[type=radio]:checked");
  let score = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i].value == ansArr[i]) {
      score += 1;
    }
  }
  $(".res").text(score);
  console.log(score);
}
console.log(ansArr);
