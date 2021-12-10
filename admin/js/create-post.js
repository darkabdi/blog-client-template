async function getPost() {
    try {
      let response = await fetch("http://localhost:5000/posts");
      let post = await response.json();
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  }
  getPost();
  
  function createPost() {
    let form = document.getElementById("create-form");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      let formData = new FormData(form);
      formDataObject = {
        "content": formData.get("content"),
      };
      console.log(formDataObject)
  
      try {
        await fetch("http://localhost:5000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
        });
  
        console.log("hej");
      } catch (error) {
        console.log(error);
      }
    });
  }
  createPost();
  