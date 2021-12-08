window.onload = function () {
  getPosts();
};
// let url = '/localhost:5000/posts'
async function getPosts() {
  let response = await (await fetch("http://localhost:5000/posts")).json();

  let posts = "";
  for (let post of response) {
    posts += `
     <li class="list-group-item">
         <p>${post.content}</p>
<<<<<<< HEAD
         <button id="update" data-id=${post._id}><a href="/Users/salimmvoungui/blog-client-template/admin/update-post.html?id=${post._id}">update</a></button>
=======
         <button id="update" data-id=${post._id}><a href="../admin/update-post.html?id=${post._id}">update</a></button>
>>>>>>> b7c4864249a4fd866de30385481d27ac191a6e40
     </li>
 `;
  }
  let content = (document.getElementById("content").innerHTML += posts);
}
