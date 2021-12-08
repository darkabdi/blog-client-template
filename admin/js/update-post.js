window.onload = function () {
  let queryString = location.search;

  let postId = new URLSearchParams(window.location.search).get("id");

  getPost(postId);
  submitUpdate(postId);
  console.log(postId);
};

async function getPost(postId) {
  try {
    let response = await fetch(`http://localhost:5000/posts/${postId}`);
    let post = await response.json();

    let textAreaValue = post.content;
    let authorValue = post.author;
    let titleValue = post.title;

    document.getElementById("update-content").value = textAreaValue;
    document.getElementById("author-input").value = authorValue;
    document.getElementById("title-input").value = titleValue;
  } catch (error) {
    console.log(error);
  }
}

function submitUpdate(postId) {
  let form = document.getElementById("update-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let formData = new FormData(form);

    updatedContent = {
      content: formData.get("update-text"),
    };

    try {
      await fetch(`http://localhost:5000/posts/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContent),
      });
      console.log("hej");
      console.log(updatedContent);
      location.replace("index.html");
    } catch (error) {
      console.log(error);
    }
  });
}
