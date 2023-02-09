const yargs = require('yargs')
const notes = require('./Notes.js')



//Create a add command 

yargs.command({
    command:'add',
    describe: 'Add a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
    
})

//Remove a command 
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }   
     },
    handler(argv){
        notes.removeNote(argv.title)
        // console.log("Remove a note ")
    }
})

// List a command 
yargs.command({
    command:'list',
    describe: 'List a note',
    handler(){
        notes.listNotes()
    }
})


//Read  a command 
yargs.command({
    command:'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }   
     },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


yargs.parse()