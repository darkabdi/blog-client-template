window.onload = function(){
    getAllPosts();
}

async function getAllPosts(){
    try {
        let response = await fetch ('http://localhost:5000/posts');
        let data = await response.json();

        createElements (data);

    } catch (error) {
        blogPostsSection.innerHTML = 'You done messed up: ' + error;
    }
}


function createElements (data){
    
    let blogPostsSection = document.getElementById('blogPostsSection')

    let result = '';
    for (post of data){
        console.log(post);
        console.log(post.tags)
        result += `
            <article>
            <h2>${post.title}</h2>
            <p><i>${post.author} | ${editDateData(post.date)}</i></p>
            <p>${contentMaxLength(post.content, post._id)}</p>
            
            <p><b>Tags: </b>${tagsLoop(post.tags)}</p>
            </article>
        `
    }

    blogPostsSection.innerHTML = result;

}


function editDateData (date){

    let editedDateData = date.replace('T', ' ');
    editedDateData = editedDateData.slice(0, -8);
    return editedDateData;
}


function contentMaxLength (content, id){
    if(content.length > 100){
        let editedContent = content.slice(0, 100) + '... ';
        editedContent += `<span><a href="post.html?_id=${id}">Read more</a></span>`
        return editedContent;
    }else{
        return content;
    }
};


function tagsLoop (tagsArray){
    
    tagsList = '';
    for (tag of tagsArray){
        tagsList += tag + ', ';
        console.log(tagsList);
    }
    return tagsList.slice(0,-2);
}