const p = document.querySelectorAll('p');
const haslo = "siemanko".toUpperCase();
let ukryte;
let jeden;
const hasloContainer = document.querySelector('.haslo1');
let newOne = [];
ukryte = haslo.split('')



function invisiblePassword(){
    for(let x = 0; x<ukryte.length; x++){
        newOne[x] = " _ ";

    }
    console.log(newOne)
    hasloContainer.innerHTML = newOne.join('');
    
}
invisiblePassword()


console.log(ukryte)

let badClickCount = 1;


p.forEach( (element) => {
    element.addEventListener('click', () => {
        
        let checkTheLetter = false;
        for(let i = 0; i<= haslo.length; i++){
            if(element.innerHTML == haslo[i] ){
            newOne[i] = element.innerHTML;
            hasloContainer.innerHTML = newOne.join('');
            element.style.backgroundColor = 'green';
            checkTheLetter = True;
         
            }
        }
        if (checkTheLetter == false) {
            element.style.backgroundColor = "red";
            badClickCount++
            console.log(`${badClickCount}`)
        }
       //hasloContainer.innerHTML += element.innerHTML;
    })
})















// const container = document.querySelector('.container');
// const API_URL = 'https://inwestowaniepro.pl/wp-json/wp/v2/posts';




// const articles = () => {

//     const newArticle = document.createElement('div');

//     fetch(API_URL)
//     .then(response => response.json())
//     .then(data => { 
//         data.forEach(element => {
//             console.log(element)
//             const siusiak = document.createElement('div');
//             siusiak.innerHTML =`<h1> ${element.title.rendered}</h1>`
//             container.appendChild(siusiak)
//         });
//     }
        
//         )

        
// }

// let d = new Date();


// console.log(Date());

// let x = document.createElement('p');
// x.innerHTML = d;
// document.body.appendChild(x)


/* const container = document.querySelector('.container');
const API_URL = 'https://inwestowaniepro.pl/wp-json/wp/v2/posts';





const articles = () => {

    const newArticle = document.createElement('div');

    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        newArticle.innerHTML = `
        <div class="article1">
            <img src="${data[0].yoast_head_json.og_image[0].url}" alt="">

            <h1>${data[0].title.rendered}</h1>
        </div>
        `
        container.appendChild(newArticle)

    });


    
  
}

articles()*/