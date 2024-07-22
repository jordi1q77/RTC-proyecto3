import "./search.css";
import { getImages } from "../unsplash/unsplash";
import { showPinterestPhotos, limpiarPinterestResults } from "../pinterest/pinterest";
import { showProposals } from "../proposalButtons/proposalButtons";
const search = () => {
  const input = document.querySelector("[name='search']");
  const texto = input.value;
  buscar(texto);
}
export async function buscar (texto){
  limpiarPinterestResults();
    const prompt = document.querySelector(".prompt");
    prompt.innerHTML ="Searching...";
    getImages(texto, 1).then((res) => {
      const imagesList = res.results;
      const totalPages = res.total_pages;
      showPinterestPhotos(imagesList);

      for (let i = 2; i <= totalPages;i++){
        getImages(texto,i).then((imagesList) => showPinterestPhotos(imagesList.results));
      }
      prompt.innerHTML ="";
    })
    .catch((Error) => {
      console.log(Error);
      if (Error === "No hay datos"){
        console.log("he entrado");
        limpiarPinterestResults();
        showProposals();
      }
      prompt.innerHTML = Error;
    })
    
    //const imagesList = await getImages(texto);

}
export const addEventSearch = () => {
  const searchButton =  document.querySelector("#searchButton");
  searchButton.addEventListener("click", search);
}




