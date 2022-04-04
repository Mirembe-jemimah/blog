// manipulates behavior for the index page
let postTitle = "How to center headings on  a page?";
let postContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
                 when an unknown printer took a galley of type and scrambled it to make a type \
                 specimen book. It has survived not only five centuries, but also the leap into \
                 electronic typesetting, remaining essentially unchanged. \
                 It was popularised in the 1960s with the release of Letraset sheets containing \
                 Lorem Ipsum passages, and more recently with desktop publishing software like \
                 Aldus PageMaker including versions of Lorem Ipsum";
let postAuthor = "Eve Akansasira";

console.log(postTitle, "*****", postContent,"****", postAuthor) 

//accessing elements on the page
//access using css class
let button = document.getElementsByClassName('btn');
console.log(button)
//button.forEach()

//accessing elements using elements id
document.getElementById('second');
console.log()

//accessing elements with the tag name
let allH3s = document.getElementsByTagName('h3');

// single elementqueryselector
document.querySelector("#second");

//all items using query selector
console.log('every btn',document.querySelectorAll(".btn"));
let inputElem = document.querySelector("input")

//
//simple form processsing
const form = document.querySelector("form");
let email = form.email;
let content = form.content;
let title = form.title;

//process email and author
function getAuthor(email){
    return email ? email.substring(0, email.lastIndexOf('@')):'';
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); //stop operations until i say so
    let blogPost = {
        author: getAuthor(email.value),
        title: title.value,
        content: content.value,
    }
    console.log('submitted', blogPost)
})

