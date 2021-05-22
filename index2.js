let inputValue = document.getElementById("inputText");
let addbTn = document.getElementById("addbtn");
let Item = document.getElementById("item");

// var paragraph = document.createElement("p");

let addItem = (e) => {
  var paragraph = document.createElement("p");
  var divele = document.createElement('div');
  var checkbox = document.createElement("input");
  paragraph.innerText = inputValue.value;
  checkbox.type = "checkbox";
  divele.appendChild(checkbox);
  divele.appendChild(paragraph);
  Item.appendChild(divele);
  paragraph.classList.add("paragraph-styling");
  inputValue.value = "";
  let addChecked = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      paragraph.classList.add("underline");
    } else {
      paragraph.classList.remove("underline");
    }
  };
  checkbox.addEventListener("click", addChecked);
  
};


addbTn.addEventListener("click", addItem);

