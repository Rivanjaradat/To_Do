const buttonAdd = document.querySelector("button");
const taskinput = document.getElementById("taskInput");





function addtask() {
  const taskvalue = taskinput.value;
  if (taskvalue === ""){
    alert("  اضف قليلا من الانجاز لهذا اليوم  ")
  }
  else {
  result= `
  <li><div class="task">
  <input type="checkbox" class="check" onclick="deleteTask(this)">
  <a>${taskvalue}</a>

  <button class="Button" onclick="removeTask()"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
  </div></li>
  
  `
  

  
document.querySelector(".tasks").innerHTML+=result;
taskinput.value=" "
  }

}
function deleteTask(checkbox) {
    const item = checkbox.parentElement.querySelector("a");
    if (checkbox.checked) {
      item.classList.add("deletetask");
      
    }
    else{
        item.classList.remove("deletetask");
    }
  }
  function removeTask(){
   
    const task = document.querySelector("ul li");
    task.remove();

  }


