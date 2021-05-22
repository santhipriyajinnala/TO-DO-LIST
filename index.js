// function button() {
//   let x = document.getElementById("fname").value;
//   let y = document.getElementById("list-container");
//   y.innerHTML = x;
// }
window.onload = function () {
  const addbtn = document.getElementById("btn");
  const addinput = document.getElementById("fname");
  const listHead = document.getElementById("list");
  const finshTask = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      e.target.setAttribute("class", "strike");
    } else {
      e.target.removeAttribute("class");
    }
  };
  const addItem = (e) => {
    let inputval = addinput.value;
    if (!inputval) {
      return;
    }
    const template = document.getElementById("template");
    const clone = document.importNode(template.content, true);
    clone.querySelector("span").textContent = inputval;
    clone.querySelector("input").addEventListener("click", finshTask);
    listHead.appendChild(clone);
    addinput.value = "";
  };
  addbtn.addEventListener("click", addItem);
};
