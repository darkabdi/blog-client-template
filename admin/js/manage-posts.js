window.onload = function () {
  getPosts();
};
// let url = '/localhost:5000/posts'
async function getPosts(){
    try {
        let response= await (await fetch('http://localhost:5000/posts')).json()
    
    let posts =""
    for (let post of response){
        let postdate = new Date(post.date)
        let formatedDate = `${postdate.getFullYear()}-${postdate.getMonth() + 1}-${postdate.getDate()}`
     posts +=`
     <li class="list-group-item" style="list-style: none;" >
         <p>${post.content}</p> <br> ${formatedDate}</span> </p>
         <button id="update" data-id=${post._id}><a href="../admin/update-post.html?id=${post._id}">update</a></button>
         <button class="delete" data-id=${post._id}>delete</a></button>
     </li>`
    }
    let content = document.getElementById("content").innerHTML+= posts
   
    } catch (error) {
        
    }
    let deletebtn = document.getElementsByClassName("delete")
    for (let links of deletebtn){
        links.addEventListener("click",async(e)=>{
            e.preventDefault()
            await fetch(`http://localhost:5000/posts/${e.target.dataset.id}`,{
                method:"DELETE"
            })
            links.parentElement.remove()
            console.log(e.target.dataset.id)
        })
    }
    
   
}
