const input1 = document.querySelector(".name");
const input2 = document.querySelector(".number");
const btn = document.querySelector(".save");
const cardNumber = document.querySelector(".cardNumber");
const Name = document.querySelector(".Name");

function view() {
  const task = JSON.parse(localStorage.getItem("task")) || [];
  task.map((el) => {
    (cardNumber.innerHTML = el.title1), (Name.innerHTML = el.title);
  });
  input1.value = "";
  input2.value = "";
}
view();
btn.addEventListener("click", () => {
  const task = JSON.parse(localStorage.getItem("task")) || [];
  if (input1.value !== "" && input2.value !== "") {
    const newTask = {
      title: input1.value,
      title1: input2.value,
    };
    const res = [...task, newTask];
    localStorage.setItem("task", JSON.stringify(res));
    view();
  }
});
