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
        for (posts of data){
            result += `
                <article>
                    <
            `
        }
        

    } catch (error) {
        blogPostsSection.innerHTML = 'You done messed up: ' + error;
    }
}