window.onload = function () {
  getPosts();
};


let tableData = document.getElementById('tableData');

async function getPosts(){
    try {
        let response = await (await fetch('http://localhost:5000/posts')).json();

    createElements(response);
    deleteButtons();
   
    } catch (error) {
        tableData.innerHTML = ('Something went wrong: (' + error + ')');
    };
};


function createElements (response){
    let posts = "";
    for (let post of response){
        posts += `
            <tr>
                <td>${post.title}</td>
                <td>${post.author}</td>
                <td>${post.tags}</td>
                <td>${editDateData(post.date)}</td>
                <td>
                    <button data-id=${post._id}><a href="../admin/update-post.html?id=${post._id}">Update</a></button>
                    <button class="delete" data-id=${post._id}>Delete</a></button>
                </td>
            </tr>`;
    };

    tableData.innerHTML += posts;
};


function editDateData (date){

    let editedDateData = date.replace('T', ' ');
    return editedDateData.slice(0, -8);
};


function deleteButtons(){
    let deletebtns = document.getElementsByClassName("delete");
    for (let deletebtn of deletebtns){
    deletebtn.addEventListener("click", async(e)=>{
        e.preventDefault();
        await fetch(`http://localhost:5000/posts/${e.target.dataset.id}`, {
            method:"DELETE"
        });
        deletebtn.parentElement.parentElement.remove();
    });
    };
};