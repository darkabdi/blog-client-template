CreateNewPost();

function CreateNewPost() {
  let form = document.getElementById("create-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let formData = new FormData(form);
    let blogPost = {
      content: formData.get("create-text"),
      author: formData.get("author"),
      title: formData.get("title"),
      tags: formData.getAll("tags"),
    };

    try {
      await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogPost),
      });
      location.replace("index.html");
    } catch (error) {
      console.log(error);
    }
  });
}

