
import initCubeSlider from "cubeslider";

export function showCube(imageSrc){
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
  size = 25;
  //console.log(imageSrc);
  initCubeSlider({
    el: '.my-slider',
    slides: imageSrc.slice(0,5), //add up to 6 images
//extra options goes here
    row:2,
    size: size
  })
}