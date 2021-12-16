window.onload = function(){
    getAllPosts();
}

let blogPostsSection = $('#blogPostsSection');

async function getAllPosts(){
    try {
        let response = await fetch ('http://localhost:5000/posts');
        let data = await response.json();

        createElements (data);
        fadeIn();

    } catch (error) {
        blogPostsSection.html('You done messed up: (' + error + ')');
    };
};


function createElements (data){

    for (post of data){
        blogPostsSection.append(`
            <article>
            <h2>${post.title}</h2>
            <p><i>${post.author} | ${editDateData(post.date)}</i></p>
            <p>${contentMaxLength(post.content, post._id)}</p>
            <p><b>Tags: </b>${tagsLoop(post.tags)}</p>
            </article>
        `);
    };
};


function editDateData (date){

    let editedDateData = date.replace('T', ' ');
    return editedDateData.slice(0, -8);
};


function contentMaxLength (content, id){
    if(content.length > 100){
        let editedContent = content.slice(0, 100) + '... ';
        return editedContent += `<span><a href="post.html?_id=${id}">Read more</a></span>`;
    }else{
        return content;
    };
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


function fadeIn (){

    let nummer = 500;
    for (let i = 0; i < $('article').length; i++){
        let article = $('article')[i];
        $(article).fadeIn(nummer);
        nummer += 750;
    };
};