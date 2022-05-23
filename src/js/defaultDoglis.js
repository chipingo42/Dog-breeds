const africa = 'african';
const dogCard = document.querySelector('.dog_cards');


export const deFaultDogList = async () => {
    try {
      const data = await fetch(`https://dog.ceo/api/breed/${africa}/images/random/12`);
      const defaultData = await data.json();
      // console.log(defaultData.message)
      randomImages(defaultData.message)
  
    } catch (error) {
      console.error(error.message, 'forbiden try again...')
    }
};
  
 
const randomImages = (data) => {
    const dogImage = `
          ${data?.map((url) => (`<img src=${url} alt="dog-image">`))}`
    dogCard.innerHTML = dogImage;
};
  


deFaultDogList()
  
  
