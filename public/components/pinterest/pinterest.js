import './pinterest.css'

export const createPinterestSection = () => {
  const main = document.querySelector("main");
  const pinterestResults = document.createElement("section");

  pinterestResults.classList.add("pinterestResults");
  main.append(pinterestResults);
}
export const limpiarPinterestResults = () => {
  const pinterestResults = document.querySelector(".pinterestResults");
  pinterestResults.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("ulPhotos");
  pinterestResults.append(ul);
}
export const showPinterestPhotos = (photosList) => {

  
  const ul = document.querySelector(".ulPhotos");
  for (const photo of photosList) {
    const li = document.createElement("li");
    li.classList.add("liPhoto");
    const img = document.createElement("img");
    img.classList.add("pinterestPhoto");
    img.src = photo.urls.thumb;
    const p = document.createElement("p");
    p.classList.add("photoDescription");
    p.textContent = photo.description;
    li.append(img);
    li.append(p);
    ul.append(li);

  }

}