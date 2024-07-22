import { getTopics,getPhotosTopic} from "../unsplash/unsplash";
import { showPinterestPhotos} from "../pinterest/pinterest";

export const cargarTopics = async () =>{
  const numberOfTopics = 6; // topics per page
  let page = 1;
  let topicList = await getTopics(page,numberOfTopics);
  //console.log(topicList.length);
  do {
    topicsToBurguer(topicList);
    page++;
    topicList = await getTopics(page,numberOfTopics);
  } while (topicList.length > 0)
  //console.log(topicList.length);
}
 
const topicsToBurguer = (topicList) =>{
  const ul = document.querySelector(".menuppal > ul");
 
  for (const [index,topic] of topicList.entries()) {
    const li = document.createElement("li");
    li.addEventListener("click", async function(){ 
      const prompt = document.querySelector(".prompt");
      prompt.innerHTML ="Searching...";
      const imagesList = await getPhotosTopic(topic);
     
      showPinterestPhotos(imagesList);
      prompt.innerHTML = topic.title;
    }, false);
    const img = document.createElement("img");
    const span = document.createElement("span");
    li.classList.add("topic");
    li.classList.add("menuListTopic");
    img.src = topic.cover_photo.urls.small;
    img.alt = topic.title;

    li.title = topic.title;
    span.textContent = topic.title;
    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(span);
  }
   // menu.appendChild(ul);
}