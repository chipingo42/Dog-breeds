const african = 'african'
const dogCard = document.querySelector('.dog_cards')

export const deFaultDogList = async () =>  {
    try {
        const data = await fetch(`https://dog.ceo/api/breed/${african}/images/random/9`);
        const defaultData = await data.json();
        // console.log(defaultData.message)
        randomImages(defaultData.message)
    } catch (error) {
        console.log(error.message, 'forbiden check again...')
    }
}


// Get dog image
const randomImages = (data) => {
  const dogImge = ` 
       ${data?.map((url) => {
           return `<img src=${url} alt="dog-image">`
       })}
    `;
    dogCard.innerHTML = dogImge;
}

