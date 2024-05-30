import './style.css';
import initCubeSlider from "cubeslider";
import "./node_modules/cubeslider/css/cubeslider.css";
import { getImages, getTopics, getPhotosTopic } from './public/components/unsplash/unsplash';
import "./public/components/search/search";
import "./public/components/burger/burger.css";
import "./public/components/burger/burger";

const numberOfTopics = 6;

async function buscar (event){
  const texto = event.target.value;
  if (texto.length > 3){
    const prompt = document.querySelector(".prompt");
    prompt.innerHTML ="Searching...";
    const imageSrc = await getImages(texto);
    showCube(imageSrc);
    prompt.innerHTML ="";
  }
  
}
const addEventSearch = () => {
  const search =  document.querySelector("#search");
  search.addEventListener("keydown", buscar);
}
//creating slider

const cargarTopics = async () =>{
  let page = 1;
  let topicList = await getTopics(page,numberOfTopics);
  console.log(topicList.length);
  do {
    topicsToDom(topicList);
    page++;
    topicList = await getTopics(page,numberOfTopics);
  } while (topicList.length > 0)
  console.log(topicList.length);
}
 
const topicsToDom = (topicList) =>{
  const listDomRight = document.querySelector(".right-list");
  const listDomLeft = document.querySelector(".left-list");
  const ulRight = document.createElement("ul");
  const ulLeft = document.createElement("ul");

  for (const [index,topic] of topicList.entries()) {
    const li = document.createElement("li");
    li.addEventListener("click", async function(){ 
      const prompt = document.querySelector(".prompt");
      prompt.innerHTML ="Searching...";
      const imageSrc = await getPhotosTopic(topic);
      showCube(imageSrc);
      prompt.innerHTML = topic.title;
    }, false);
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    li.classList.add("topic");
    img.src = topic.cover_photo.urls.small;
    img.alt = topic.title;

    li.title = topic.title;
    h2.textContent = topic.title;
    // según sea par/impar será en la lista izquierda y derecha. En la izquierda primero va el nombre y después va la imagen. En la derecha al revés
    if (index % 2 === 0){ 
      ulRight.appendChild(li)
      li.appendChild(img);
      li.appendChild(h2);
    }else{
      li.appendChild(h2);
      li.appendChild(img);
      ulLeft.appendChild(li)
    }
  }
    listDomRight.appendChild(ulRight);
    listDomLeft.appendChild(ulLeft);
}
  
  function showCube(imageSrc){
      const slider = document.querySelector(".my-slider");
      const iw = window.innerWidth;
      let size = 0;

      slider.innerHTML = '';
     //comprobamos el tamaño de pantalla
      switch (true){
        case (iw<500):
          size = 50;
          break;
        case (iw< 1000):
          size = 100;
          break;
        default:
          size=150;
          break;
      }
      //console.log(imageSrc);
      initCubeSlider({
        el: '.my-slider',
        slides: imageSrc.slice(0,5), //add up to 6 images
  //extra options goes here
        row:2,
        size: size
      })
    }

addEventSearch();
const photosCube = await getImages('surprise');
showCube(photosCube);
//getTopics(1,10,".left-list");
cargarTopics();