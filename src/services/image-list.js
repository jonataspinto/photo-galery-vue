export const fetchImageList = async () => {
  if (!localStorage.getItem('imagesList')) {
    const response = await fetch('https://picsum.photos/v2/list?limit=12');

    const responseJson = await response.json();

    localStorage.setItem(
      'imagesList',
      JSON.stringify(responseJson)
    );

    return responseJson.map((image) => ( 
      (image.width > image.height) && image
    ));
  }

  const dataStorage = JSON.parse(localStorage.getItem('imagesList'));

  return dataStorage.map((image) => ( 
    (image.width > image.height) && image
  ));
}
