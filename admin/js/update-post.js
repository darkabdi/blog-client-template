window.onload = function () {
  let postId = new URLSearchParams(window.location.search).get("id");

  getPost(postId);
  addTag();
  submitUpdate(postId);

  console.log(postId);
};
let tagList = [];
async function getPost(postId) {
  try {
    let response = await fetch(`http://localhost:5000/posts/${postId}`);
    let post = await response.json();

    let textAreaValue = post.content;
    let authorValue = post.author;
    let titleValue = post.title;
    let tagsValue = post.tags;

    let oldItems = tagsValue.map(
      (tagValue) => "<li>" + "#" + tagValue + "</li>"
    );
    let oldHtml = "<ul>" + oldItems.join("") + "</ul>";
    document.getElementById("update-content").value = textAreaValue;
    document.getElementById("author-input").value = authorValue;
    document.getElementById("title-input").value = titleValue;
    document.getElementById("showTag").innerHTML = oldHtml;
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
      tags: tagList,
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

function addTag() {
  let add = document.getElementById("addTag");

  add.addEventListener("click", function (e) {
    e.preventDefault();
    let tagValue = document.getElementById("tags-input").value;

    tagList.push(tagValue);
    let items = tagList.map((tagValue) => "<li>" + "#" + tagValue + "</li>");
    let html = "<ul>" + items.join("") + "</ul>";

    document.getElementById("showTag").innerHTML = html;

    console.log();
  });
}
