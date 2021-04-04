// save a note in localstorage
function saveNote() {
    newNote = document.querySelector("#note");
    // don't allow blank note
    if (newNote.value == "") {
        alert("Please enter some text");
        return;
    }
    let allNotes = getAllNotes();
    // add next note to list
    allNotes[allNotes.length] = newNote.value;
    // store back in localstorage
    localStorage.setItem('notes', JSON.stringify(allNotes));
    alert("Note saved");
}

// read a list of all notes from local storage and return it
function getAllNotes() {
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    if (!allNotes) {
        allNotes = [];
    }
    return allNotes; 
}

// store all notes back in localstorage
function storeNotes(allNotes) {
    localStorage.setItem('notes', JSON.stringify(allNotes));
}

// display notes by insertion in DOM element id "notes-list"
function displayNotes() {
    let allNotes = getAllNotes();
    notesList = document.querySelector("#notes-list");
    allNotes.forEach(note => {
        let listItem = document.createElement('li');
        listItem.innerHTML = note;
        notesList.appendChild(listItem);
    });
}