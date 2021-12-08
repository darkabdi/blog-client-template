CreateNewPost();

function CreateNewPost() {
  let form = document.getElementById("create-form");
  document.getElementById("create-content").value;
  document.getElementById("author-input").value;
  document.getElementById("title-input").value;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let formData = new FormData(form);
    let formDataObject = {
      content: formData.get("create-text"),
      author: formData.get("author"),
      title: formData.get("title"),
    };

   

    try {
      await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });
      location.replace("index.html");
    } catch (error) {
      console.log(error);
    }
  });
}

CreateNewPost();

// let serializeForm = function (form) {
//     var obj = {};
//     var formData = new FormData(form);
//     // console.log(formData.getAll());

//     for (var key of formData.keys()) {
//         let inputData = formData.getAll(key);

//         if (inputData.length > 1) {
//             obj[key] = inputData;
//         } else {
//             obj[key] = inputData[0];
//         }
//     }

//     // console.log(obj);
//     return obj;
// };

// formDataObject = serializeForm(form);
