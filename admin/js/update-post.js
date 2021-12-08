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

    let areaValue = post.content;

    document.getElementById("update-content").value = areaValue;
  } catch (error) {
    console.log(error);
  }
}

function submitUpdate(postId) {
  let form = document.getElementById("update-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let formData = new FormData(form);

    formDataObject = {
      "content": formData.get("content"),
    };

    try {
      await fetch(`http://localhost:5000/posts/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });
      console.log("hej");
      location.replace("index.html");
    } catch (error) {
      console.log(error);
    }
  });
}
