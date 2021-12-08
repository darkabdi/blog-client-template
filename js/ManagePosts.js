window.onload = function() {
    getPosts()
}
// let url = '/localhost:5000/posts'
async function getPosts(){
    let response= await fetch('http://localhost:5000/posts')
    
    
}