window.onload = function() {
    getPosts()
}
// let url = '/localhost:5000/posts'
async function getPosts(){
    let response= await (await fetch('http://localhost:5000/posts')).json()
    console.log(response.content)
    
    let content = document.getElementById("content")
    for (let post of response){
      let blogs =  `<li>${response.content}</li>`
      content.innerHTML +=blogs
    }    
    
}