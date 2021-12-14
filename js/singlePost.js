window.onload = function (){
    getSinglePost()
}

let singleBlogPostSection = $('#singleBlogPostSection');

urlParameters = new URLSearchParams(window.location.search);
let urlPunID = urlParameters.get('_id');

async function getSinglePost(){
    try {
        let response = await fetch ('http://localhost:5000/posts/' + urlPunID)
        let data = await response.json()
        
        createElement(data);

    } catch (error) {
        singleBlogPostSection.html('You done messed up: (' + error + ')');
    };
};


function createElement(data){
    
    singleBlogPostSection.html(`
    <article>
    <h2>${data.title}</h2>
    <p><i>${data.author} | ${editDateData(data.date)}</i></p>
    <p>${data.content}</p>
    <p><b>Tags: </b>${tagsLoop(data.tags)}</p>
    </article>
    `);

};


function editDateData (date){

    let editedDateData = date.replace('T', ' ');
    return editedDateData.slice(0, -8);
};


function tagsLoop (tagsArray){
    
    if(tagsArray.length > 0){
        tagsList = '';
        for (tag of tagsArray){
            tagsList += tag + ', ';
        }
        return tagsList.slice(0,-2);
    }else{
        return tagsList = `<i>None</i>`;
    };
};