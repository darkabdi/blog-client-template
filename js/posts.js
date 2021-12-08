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
                <p>Author: ${post.author}</p>
                <p>Date: ${post.date}
                <p>Content: ${post.content}</p>
                </article>
            `
        }
        blogPostsSection.innerHTML = result;

    } catch (error) {
        blogPostsSection.innerHTML = 'You done messed up: ' + error;
    }
}