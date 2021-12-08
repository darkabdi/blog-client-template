async function getPost() {
  try {
    let response = await fetch("http://localhost:5000/posts");
    let post = await response.json();
    console.log(post);
    document.getElementById("update-content").value = post.content;
  } catch (error) {
    console.log(error);
  }
}
getPost();
