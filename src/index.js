 document.addEventListener("DOMContentLoaded", function(event) {

   fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(res => renderBooks(res)).then(res => getBookInfo())

 })

 function renderBooks(res) {
   res.forEach(book => {
     let list = document.getElementsByClassName("list-group")[0]
     var listItem = document.createElement("li")
     listItem.id = `${book.id}`
     listItem.innerHTML = `${book.title}`
     list.appendChild(listItem)
    //  listItem.addEventListener("click", function(event) {
    //    let div = document.querySelector("#book-detail")
    //    div.innerHTML = `<h1>${book.title}</h1>
    //                     <img src="${book.imageLink}">
    //                     <h2>By ${book.author}</h2>
    //                     <h3>${book.pages} pages</h3>
    //                     <p>${book.description}</p>`
    //  })
   })
 }

 function getBookInfo() {

   document.querySelectorAll("li").forEach(item => {
     item.addEventListener("click", function(event) {

       fetch(`http://localhost:3000/books/${item.id}`)
       .then(res => res.json())
       .then(res => {
         let div = document.querySelector("#book-detail")
            div.innerHTML = `<h1>${res.title}</h1>
                             <img src="${res.imageLink}">
                             <h2>By ${res.author}</h2>
                             <h3>${res.pages} pages</h3>
                             <p>${res.description}</p>`
       })

     })
   })

 }
