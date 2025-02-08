let taskvalue = document.getElementById("task");
let description = document.getElementById("description");
let startDate = document.getElementById("start_day");
let endDate = document.getElementById("end_day");
let priority = document.getElementsByName("priority")[0];
var title_error = document.getElementById("task_title_error");
var description_error = document.getElementById("description_error");
var start_day_error = document.getElementById("start_day_error");
var end_day_error = document.getElementById("end_day_error");
let index;
let childTasks = document.getElementsByClassName("priority");
let section = document.getElementById("section");
let formSection = document.querySelector(".to_do_list");

// _______ bouton Ajouter _______  //
// ____POUR BIEN COMPRENDRE VOIRE LE COMMENTAIRE DANS HTML _____  // 
function addFunction(){
if (taskvalue.value !== "" && description.value !== "" && startDate.value !== "" && endDate.value !== "") {
var task = document.createElement("div");
// _____on crée le div qui contient tout le task avec sa class____  //
task.setAttribute("class", "task");
// _____on crée le div qui contient la task bar avec sa class_____  //
let taskBar = document.createElement("div");
taskBar.setAttribute("class", "taskBar");
// _____on crée le div qui contient les icones modifier et suprimer____//
let icones = document.createElement("div");
icones.setAttribute("class", "icons");
// _____on crée une div qui position le checkbox et le task text____ //
let checkboxPosition = document.createElement("div");
checkboxPosition.setAttribute("class", "checkboxPosition");
let h3 = document.createElement("h3");
h3.innerText = taskvalue.value
let checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkboxPosition.appendChild(h3);

checkboxPosition.appendChild(checkbox);

let p = document.createElement("p");
p.innerText = description.value
let li = document.createElement("li");
li.innerText = startDate.value + " | " + endDate.value
taskBar.appendChild(checkboxPosition);
taskBar.appendChild(p);
taskBar.appendChild(li);
let trashImg = document.createElement("img");
trashImg.setAttribute("class", "trashImg");
trashImg.setAttribute("src", "img/trash.png");
let deleteButton = document.createElement("button");
deleteButton.appendChild(trashImg);
let pen = document.createElement("img");
pen.setAttribute("class", "pen");
pen.setAttribute("src", "img/pen.png");
let modifiéButton = document.createElement("button");
modifiéButton.appendChild(pen);
modifiéButton.setAttribute("class", "Button")
icones.appendChild(deleteButton);
icones.appendChild(modifiéButton);
task.appendChild(taskBar);
task.appendChild(icones);
// ________________________________ priority ___________________________________//
if(priority.checked){
  taskBar.style.border="2px solid #a786df";
  task.classList.add("priority");
  section.insertBefore(task, section.children[1]);
    
}
else{
    section.insertBefore(task, section.children[childTasks.length+1]);
}
// ______ modifier button ______  //

modifiéButton.addEventListener("click", (Button) => {    
    let iconesContent = modifiéButton.parentElement;
    let taskContent = iconesContent.parentElement;
    let taskbarContent = taskContent.children;
    let taskbarchild = taskbarContent[0];
    let para = taskbarchild.children[1].innerText;
    let modifiInput = document.createElement('textarea');
    modifiInput.innerText= para;
    modifiInput.setAttribute("class", "modifierInput")
    taskbarchild.replaceChild(modifiInput, taskbarchild.childNodes[1]);
    let taskInput = taskbarchild.children[0];
    let h3 = taskInput.children[0].innerText;
    let modifierTask = document.createElement("input");
    modifierTask.setAttribute("class", "modifierInput")
    modifierTask.value = h3;
    taskInput.replaceChild(modifierTask, taskInput.childNodes[0]);
    let ok = document.createElement("button");
    ok.setAttribute("class","oky");
  ok.innerText = "OK";
  modifiéButton.remove();
  iconesContent.appendChild(ok);
  // ______validation de modification ______  //
  ok.addEventListener("click" ,() =>{
      let modifierpara = document.createElement("p");
      modifierpara.innerText = modifiInput.value;
      taskbarchild.replaceChild(modifierpara, taskbarchild.childNodes[1]);
      let modifierH3 = document.createElement("h3");
      modifierH3.innerText = modifierTask.value;
      taskInput.replaceChild(modifierH3, taskInput.childNodes[0]);
      ok.remove();
      iconesContent.appendChild(modifiéButton);
    });  
});
// ______ Taches terminées ______  //
checkbox.addEventListener("change", ()=>{
    if(checkbox.checked){
        let checkboxPosition1 = checkbox.parentElement;
        let taskBar1 = checkboxPosition1.parentElement;
        taskBar1.style.textDecoration ="line-through";
        modifiéButton.remove();
        let task1 = taskBar1.parentElement;
        section.appendChild(task1);
    }
});
// _______suprimer bouton ______  //
deleteButton.addEventListener("click", () =>{
   let deletIcon = deleteButton.parentElement;
   deletIcon.parentElement.id = "animation";
   setTimeout(() => {
     deletIcon.parentElement.remove();
   }, 1000);
});
section.style.display="block";
formSection.style.display="none";
cancel();

}
else{
    if (taskvalue.value === "") {
        title_error.innerHTML = "please fill in the task";
        title_error.style.color = "red";
      }
      if (description.value === "") {
        description_error.innerHTML = "please enter a description of your task";
        description_error.style.color = "red";
      }
      if (startDate.value === "") {
        start_day_error.innerHTML = "please enter your start day";
        start_day_error.style.color = "red";
      }
      if (endDate.value === "") {
        end_day_error.innerHTML = "please enter your end day";
        end_day_error.style.color = "red";
      }
      if (startDate.value === endDate.value) {
        end_day_error.innerHTML =
          "you cannot choose your end_day as your start_day";
        end_day_error.style.color = "red";
      }
}
}
function cancel() {
    taskvalue.value = "";
    description.value = "";
    startDate.value = "";
    endDate.value = "";
    priority.checked = false;
    title_error.innerHTML = "";
    description_error.innerHTML = "";
    start_day_error.innerHTML = "";
    end_day_error.innerHTML = "";
  }
  function retour(){
    section.style.display="none";
    formSection.style.display="block";
  }
 