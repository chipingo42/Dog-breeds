export const btnRandom = document.getElementById('random');
const hound_breed_cards = 'affenpinscher';
const dogCard = document.querySelector('.dog_cards');



btnRandom.addEventListener('click', async (e) => {
    e.preventDefault();
    try{
        const data = await fetch(`https://dog.ceo/api/breed/${hound_breed_cards}/images/random/12`);
        const defaultData = await data.json();
        // console.log(defaultData)
        randomImages(defaultData.message)
    } catch (error) {
        console.error(error.message, 'try again...')
    }
});



const randomImages = (data) => {
    const dogImage = `
         ${data?.map((url) => (`<img src=${url} alt="dog-image">`))}`
    dogCard.innerHTML = dogImage;
};
 