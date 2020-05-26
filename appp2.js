// Form reference
const form = {}
form.noteText = document.querySelector('#formNoteText');
form.addButton = document.querySelector('#formAddButton');
form.color = document.querySelector('#formColor');
form.filterOption= document.querySelector('#filternote');
const notes = document.querySelector('#notes');

form.noteText.focus();

// Functions
function addNote() {
  let text = form.noteText.value;
  let note = document.createElement('div');
  let deleteButton = document.createElement('span');
  
  note.classList.add('note');
  note.classList.add(form.color.value);
  note.innerHTML = `<div class='note-text'>${text}</div>`;
  deleteButton.classList.add('note-delete');
  deleteButton.innerHTML = '&times';

  note.appendChild(deleteButton);  
  notes.appendChild(note);

  form.noteText.value = '';
  form.noteText.focus();

  addListenerDeleteButton(deleteButton);
}

function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation();      
    deleteNote(e);
  });
}

function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}



// Event Listeners
form.addButton.addEventListener('click', function (e) {
  e.preventDefault();  
  if (form.noteText.value != '') {
    addNote();
  }
})

form.filterOption.addEventListener('click',filterNote);

function filterNote(e){
  const notess = notes.childNodes;
  notess.forEach(function(todo){
    switch(e.target.value){
      case "all":
      notes.style.display="flex";
      break;
      case "red":
      if(notes.classList.contains("red")){
        notes.style.display="flex";
      }else{
        notes.style.display="none";
      }
    }
  });
}
const filter=document.querySelector('.notes');
eventListener();
function eventListener(){
  filter.addEventListener('change',filterfunc);
}
function filterfunc(e){
   // const color=e.target.value;
    const color = e.target.value;
    console.log(e.target.value);
    const list = document.querySelectorAll('.note');
    console.log(list[0].className);
    console.log(list[1].className);
    function showall(){
      for(var i=0 ; i < list.length ; i++){
        list[i].style.display = 'block';
      }
    }
    if(e.target.value === 'note all'){
      showall();
    }
    else
    { 
      showall();
      for(var i=0 ; i < list.length ; i++){
      if (list[i].className !== e.target.value)
      { 
        list[i].style.display = 'none';
      }
    }
  }
}





