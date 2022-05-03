const baseUrl = `https://dog.ceo/api/breeds/list`;
const selectBreed = document.querySelector('#breeds');
const dogCard = document.querySelector('.dog-card');
const africa = 'african';
const randomBox = document.getElementById('random');
const displayNumber = document.querySelector('.display-Numbers')


//  The randomize image display
const hound_breed_cards = 'affenpinscher';

randomBox.addEventListener('click', async (e) => {
  e.preventDefault();
  try{
    const data = await fetch(`https://dog.ceo/api/breed/${hound_breed_cards}/images/random/12`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
});


//asynchrous function
const dogBreed = "mix"
const getNumberOfImages = async (e) => {
  e.preventDefault();
  totalNumberOfImages = e.target.value;
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/${totalNumberOfImages}`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    // Callback function
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
}

displayNumber.addEventListener('click', getNumberOfImages)


const getBreedName = (e) => {
  const value = e.target.value;
  document.getElementById('hound_header').innerHTML  = value;
  getBreedByName(value)
};


selectBreed.addEventListener('click', getBreedName);

const getBreedByName = async (name, num = 9) => {
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${name}/images/random/${num}`)
    const image = await data.json()
    //   console.log(image?.message)
    randomImages(image?.message)

  } catch (error) {
    console.log(error.messge, 'Check again')
  }
};



const getListOfBreeds = async () => {
  try {
    const data = await fetch(baseUrl)
    const res = await data.json();
    // console.log(res.message)
    selectCategory(res.message)
  } catch (error) {
    console.error(error.message, 'Not found.')
  }
};


const deFaultDogList = async () => {
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${africa}/images/random/9`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
};

deFaultDogList()


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






















