window.onload = function(){
    getAllPosts();
}

async function getAllPosts(){
    try {
        let response = await fetch ('http://localhost:5000/posts')
        let data = await response.json()
        console.log(data);

        let blogPostsSection = document.getElementById('blogPostsSection')

        let result = '';
        for (post of data){
            result += `
                <article>
                <h2>Title: ${post.author}</h2>
                <p><i>${post.author} | ${editDateData(post.date)}</i></p>
                <p>${contentMaxLength(post.content)}</p>
                <span><a href="post.html/${post._id}">Read more</a>
                </article>
            `
            console.log(post.content.length);
        }

        blogPostsSection.innerHTML = result;

    } catch (error) {
        blogPostsSection.innerHTML = 'You done messed up: ' + error;
    }
}

function editDateData (date){

    let editedDateData = date.replace('T', ' ');
    editedDateData = editedDateData.slice(0, -8);
    return editedDateData;
}


function contentMaxLength (content){
    if(content.length > 100){
        let editedContent = content.slice(0, 100) + '...';
        return editedContent;
    }else{
        return content;
    }
};