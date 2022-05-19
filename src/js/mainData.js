const BaseUrl = 'https://dog.ceo/api/breeds/list';
const selecBreed = document.getElementById('breed');


export const getListOfBreeds = async () => {
    try {
        const res = await fetch(BaseUrl)
        const data = await res.json();
        // console.log(data.message);
        createBreedList(data.message)
    } catch (error) {
      console.log(error.message, 'forbiden....')
    }
}



// getBreedValue
const getBreedName = (e) => {
   e.preventDefault()
   const value = e.target.value;
   // get the value of dogCards
   document.querySelector('.houndWord').innerHTML = value;    
   console.log(value)
}
selecBreed.addEventListener('click', getBreedName);





// select and options
const createBreedList = (data) => {
    const breedOption = `${data?.map((item) => {
        return `<option>${item}</option>`
    })}`
    selecBreed.innerHTML = breedOption;
}


