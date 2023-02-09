const fs = require('fs')


const addNote = (title,body) => {
    const notes = loadNotes()

    const duplicatesNotes = notes.filter((note) =>  note.title === title )
    
    if(duplicatesNotes.length === 0){
        notes.push({
            title:title,
            body:body
         })
        saveNotes(notes)
        console.log("New note is added !")
    }else{
        console.log("Note title taken !")
    }
    
}

//Remove Notes

const removeNote = (title) => {
    const notes = loadNotes()

    const duplicates = notes.filter((note) =>  note.title !== title)

    if(notes.length > duplicates.length){
        console.log("Note Removed")
        saveNotes(duplicates)     
    }else{
        console.log("No Note Found !")
    }
    
}

//List Notes

const listNote = (title)=>{
 const notes = loadNotes()
  notes.forEach(note => {
    console.log(note.title)
  });
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNote
}