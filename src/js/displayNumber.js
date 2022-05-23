export const displayNumber = document.getElementById('displayNumber')
const dogCard = document.querySelector('.dog_cards');
// const dogBreed = "mix"



const getNumberOfImages = async (e) => {
    e.preventDefault();
   const totalNumberOfImages = e.target.value;

   console.log(totalNumberOfImages)
    // try {
    //     const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/${totalNumberOfImages}`);
    //     const defaultData = await data.json();
    //     console.log(defaultData)
    //     // randomImages(defaultData.message)
    // } catch (error) {
    //   console.error(error.message, 'try again...')
    // }
}
displayNumber.addEventListener('click', getNumberOfImages)




// const randomImages = (data) => {
//     const dogImage = `
//          ${data?.map((url) => (`<img src=${url} alt="dog-image">`))}`
//     dogCard.innerHTML = dogImage;
// };
 