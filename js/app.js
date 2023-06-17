let item = document.querySelector("#item");
let toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup", function(event){
        if(event.key == "Enter") {
            addToDo(this.value); //value entered after display in console
            this.value = null; //value entered after displayed value in input is cleared
        }
    });

let addToDo = (item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML =
    `${item}  <i class='bx bx-no-entry' style='color:#ffffff'></i>`;

    listItem.addEventListener("click",function(){
        this.classList.toggle("done"); // toggle = click, un click    and    done = css class  
    });

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    });
    toDoBox.appendChild(listItem); // allow list input values to be displayed
}