window.onload = function (){
    getSinglePost()
}

urlParameters = new URLSearchParams(window.location.search);
let urlPunID = urlParameters.get('_id');

async function getSinglePost(){
    try {
        let response = await fetch ('http://localhost:5000/posts/' + urlPunID)
        let data = await response.json()
        
        let singleBlogPostSection = document.getElementById('singleBlogPostSection');

        let result = `
        <article>
        <h2>Title: ${data.author}</h2>
        <p><i>${data.author} | ${editDateData(data.date)}</i></p>
        <p>${data.content}</p>
        </article>
        `;

        singleBlogPostSection.innerHTML = result;

    } catch (error) {
        singleBlogPostSection.innerHTML = error;
    }
}


function editDateData (date){

    let editedDateData = date.replace('T', ' ');
    editedDateData = editedDateData.slice(0, -8);
    return editedDateData;
}