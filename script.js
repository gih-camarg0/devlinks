function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //} *faz a msm função
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //subistituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, selecionar a img light
    img.setAttribute("src", "assets/avatar-light.png")
    //se não selecionar img
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}
