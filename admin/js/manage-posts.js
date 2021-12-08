window.onload = function() {
    getPosts()
}
// let url = '/localhost:5000/posts'
async function getPosts(){
<<<<<<< HEAD
    let response= await (await fetch('http://localhost:5000/posts')).json()
    console.log(response.content)
    
    let content = document.getElementById("content")
    for (let post of response){
      let blogs =  `<li>${response.content}</li>`
      content.innerHTML +=blogs
    }    
=======
    let response= await fetch('http://localhost:5000/posts')
    
>>>>>>> 0c0fe173a1e19ca2cb2856ce6e004e8d3676d06d
    
}