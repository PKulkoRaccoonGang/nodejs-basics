const fs = require('fs')
const path = require('path')

// File System
// fs.mkdir(path.join(__dirname, 'notes'), (error) => {
//   if (error) throw error

//   console.log('Folder created!')
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello world!', (error) => {
//   if (error) throw error
  
//   console.log('File created!')

//   fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'I am here', (error) => {
//     if (error) throw error
  
//     console.log('File appended!')

//     fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'utf-8', (error, data) => {
//       if (error) throw error
//       console.log(data)
//     })
//   })
// })

fs.rename(path.join(__dirname, 'notes', 'mynotes.txt'), path.join(__dirname, 'notes', 'notes.txt'), (error) => {
  if (error) throw error

  console.log('File renamed!')
})
