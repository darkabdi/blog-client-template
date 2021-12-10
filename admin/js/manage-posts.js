window.onload = function () {
  getPosts();
};
// let url = '/localhost:5000/posts'
async function getPosts(){
    let response= await (await fetch('http://localhost:5000/posts')).json()
    
    let posts =""
    for (let post of response){
     posts +=`
     <li class="list-group-item" style="list-style: none;" >
         <p>${post.content}</p>
         <button id="update" data-id=${post._id}><a href="../admin/update-post.html?id=${post._id}">update</a></button>
         <button class="delete" data-id=${post._id}>delete</a></button>
     </li>`
    }

    let deletebtn = document.getElementsByClassName("delete")
    for (let links of deletebtn){
        links.addEventListener("click",async function(e){
            e.preventDefault()
            console.log(e.target)
        })
    }
    let content = document.getElementById("content").innerHTML+= posts
   
}
