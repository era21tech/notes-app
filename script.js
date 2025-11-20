const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelector(".input-box");

// 1. Load notes safely
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// 2. Save notes
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// 3. Create new note
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    updateStorage();  // ⭐ FIX
});

// 4. Delete + typing save
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
});

// 5. Save while typing
notesContainer.addEventListener("input", () => {
    updateStorage();
});

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})