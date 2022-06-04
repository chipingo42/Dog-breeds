const baseUrl = `https://dog.ceo/api/breeds/list`;
const selectBreed = document.querySelector('.breed');
const dogCard = document.querySelector('.dog_cards');


// getAllData
export const getListOfBreeds = async () => {
    try {
        const data = await fetch(baseUrl)
        const res = await data.json();
        selectCategory(res.message)
    } catch (error) {
       console.error(error.message, 'Not found.')
    }
};



// getValue
const getBreedName = (e) => {
    const value = e.target.value;
    document.querySelector('.houndWord').innerHTML  = value;
    getBreedByName(value)
};
selectBreed.addEventListener('click', getBreedName);



// get number of dogs
const getBreedByName = async (name, num = 12) => {
    try {
        const data = await fetch(`https://dog.ceo/api/breed/${name}/images/random/${num}`)
        const image = await data.json()
        //   console.log(image?.message)
        randomImages(image?.message)
    } catch (error) {
       console.log(error.messge, 'Check again')
    }
};


// Get dog image
const randomImages = (data) => {
    const dogImage = `
        ${data?.map((url) => (`<img src=${url} alt="dog-image">`))}`
    dogCard.innerHTML = dogImage;
};


// List of Breeds
const selectCategory = (data) => {
    const breedOption = `
      ${data?.map((el) => (`<option value=${el}>${el}</option>`))}`
   selectBreed.innerHTML = breedOption;
};


getListOfBreeds()
