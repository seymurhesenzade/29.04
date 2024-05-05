const incrementBtn = document.getElementById("btn1");
const decrementBtn = document.getElementById("btn2");
const Span = document.getElementById("span");

let count = 0;

incrementBtn.addEventListener("click", function () {
  count++;
  Span.textContent = count;
});

decrementBtn.addEventListener("click", function () {
  count--;
  Span.textContent = count;
  
if (Span.textContent<0) {
    count++;
    Span.textContent=0;
    alert("Menfi ededlerden istifade olunmur")
}

});

