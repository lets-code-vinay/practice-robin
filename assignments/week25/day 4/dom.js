function putElement() {
  var imageClass = document.createElement("div");
  imageClass.className = "image";
  document.body.appendChild(imageClass);

  var imgTag = document.createElement("img");
  imgTag.src = "https://goo.gl/kjzfbE";
  imgTag.alt = "First";
  imageClass.appendChild(imgTag);

  var myButton = document.createElement("button");
  myButton.className = "remove";
  myButton.innerText = "x";
  imageClass.appendChild(myButton);
}
putElement();
