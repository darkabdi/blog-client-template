async function getPost() {
  try {
    let response = await fetch("http://localhost:5000/posts");
    let post = await response.json();
    console.log(post);
    let areaValue = post[1].content;
    console.log(areaValue);
    document.getElementById("update-content").value = areaValue;
  } catch (error) {
    console.log(error);
  }
}
getPost();

function submitUpdate() {
  let form = document.getElementById("update-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let formData = new FormData(form);
    formDataObject = {
      content: formData.get("content"),
    };

    try {
      await fetch("http://localhost:5000/posts", {
        method: "PATCH",
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
submitUpdate();
