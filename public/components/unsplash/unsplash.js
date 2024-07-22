const accesKey = 'P0NIA4UdnbxiBbtDgdjmU3HEffuSgLUJPiPc_PEger8';
const endPointFotos = 'https://api.unsplash.com/search/photos';
const endPointTopics= 'https://api.unsplash.com/collections';


export async function getImages(query, page){
  let response = await fetch(endPointFotos + '?query=' + query +  '&client_id=' + accesKey + '&orientation=portrait'   + '&page=' + page);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  if (jsonResponse.total === 0 ){
    throw "No hay datos";
  }
  //let imagesList = await jsonResponse.results;
  //console.log(imagesList);
  return jsonResponse;
  }


export async function getTopics(page,numberOfTopics){
  let response = await fetch(endPointTopics + '?client_id=' + accesKey +'&page=' + page + '&per_page=' + numberOfTopics);
  let jsonResponse = await response.json();
  //console.log(jsonResponse);
  let topicList = await jsonResponse;
  return topicList;
  }

  export async function getPagePhotosTopic(topic, page){
   let response = await fetch(endPointTopics +'/' + topic.id + '/photos' + '?client_id=' + accesKey +  
   + '&page='+ page);
   let jsonResponse = await response.json();
   let topicPhotoList = await jsonResponse;
   
   return topicPhotoList;
 }

export const getPhotosTopic = async (topic) =>{
  let page = 1;
  let photoList = await getPagePhotosTopic(topic,page);
  //console.log(topicList.length);
  while (photoList.length > 0) {
    page++;
    photoList = await getPagePhotosTopic(topic, page);
  } 
  //console.log(topicList.length);
  return photoList;
}
 