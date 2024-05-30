const accesKey = 'P0NIA4UdnbxiBbtDgdjmU3HEffuSgLUJPiPc_PEger8';
const endPointFotos = 'https://api.unsplash.com/search/photos';
const endPointTopics= 'https://api.unsplash.com/topics';


export async function getImages(query){
  let response = await fetch(endPointFotos + '?query=' + query +  '&client_id=' + accesKey + '&orientation=landscape');
  let jsonResponse = await response.json();
  let imagesList = await jsonResponse.results;
  //console.log(imagesList);
  const imageSrc = [];
  for (const image of imagesList) {
    imageSrc.push(image.urls.thumb);
  }
  return imageSrc;
  }


export async function getTopics(page,numberOfTopics){
  let response = await fetch(endPointTopics + '?client_id=' + accesKey +'&page=' + page + '&per_page=' + numberOfTopics);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  let topicList = await jsonResponse;
  return topicList;
  }

  export async function getPhotosTopic(topic){
    let response = await fetch(endPointTopics +'/' + topic.id + '/photos' + '?client_id=' + accesKey + '&per_page=6');
   let jsonResponse = await response.json();
   let topicPhotoList = await jsonResponse;
   
   const imageSrc = [];
   for (const image of topicPhotoList) {
     imageSrc.push(image.urls.thumb);
   }
   return imageSrc;
 }
 