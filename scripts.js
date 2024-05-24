

let div = document.getElementById("Box1");
console.log(div);
let btnn = document.createElement("button");
btnn.type = "button";
btnn.textContent = "Click me !";
btnn.style = ` background-color: rgb(220, 54, 54);
border: none;
color: white;
padding: 10px;
border-radius: 10px;
position: relative;
top: 10px;
left: 48%;
`

// ? Dog() function get the api call result Dog image

function Dog() {
  let data = fetch("https://dog.ceo/api/breeds/image/random");
  data
    .then((e) => e.json())
    .then((res) => {
      let ima = res.message;
      let image = document.createElement("img");
      image.src = ima;
      image.style = ` width: 400px;
      height: 400px;
      text-align: center;`;

      div.append(image);
    });
}

// ? button click call Dog() function

btnn.addEventListener("click", () => {
       Dog();
});

// ? button append display webpage

document.body.append(btnn);
