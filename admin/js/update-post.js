window.onload = function () {
  let postId = new URLSearchParams(window.location.search).get("id");

  getPost(postId);
  addTag();
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
    let tagsValue = post.tags;

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
      author: formData.get("author"),
      title: formData.get("title"),
      tags: formData.get("tagName"),
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
    } catch (error) {
      console.log(error);
    }
  });
}

function addTag() {
  let add = document.getElementById("addTag");

  let tagList = [];
  tagList.map((tagList) => tagList);

  add.addEventListener("click", function () {
    let tagValue = document.getElementById("tags-input").value;

    tagList.push(tagValue);

    document.getElementById("showTag").innerHTML = tagList;

    console.log(tagList);
  });
}
