const p = document.querySelectorAll('p');
const haslo = "siemanko".toUpperCase();
let ukryte;
let jeden;
const hasloContainer = document.querySelector('.haslo1');
let newOne = [];
ukryte = haslo.split('')

const podest = document.querySelector('.podest');
const pion = document.querySelector('.pion');
const poziom = document.querySelector('.poziom');
const lina = document.querySelector('.lina');
const glowa = document.querySelector('.glowa');
const tulow = document.querySelector('.tulow');
const preka = document.querySelector('.preka');
const lreka = document.querySelector('.lreka');
const pnoga = document.querySelector('.pnoga');
const lngoa = document.querySelector('.lnoga');



function invisiblePassword(){
    for(let x = 0; x<ukryte.length; x++){
        newOne[x] = " _ ";

    }
    console.log(newOne)
    hasloContainer.innerHTML = newOne.join('');
    
}
invisiblePassword()


console.log(ukryte)

let badClickCount = 0;


p.forEach( (element) => {
    element.addEventListener('click', () => {
        
        let checkTheLetter = false; // sprawdzanie litery czy wystepuje wewnatrz hasla / domyslnie na false/ jesli jest wtedy zmienimy na true i nic nie zrobimy, a jesli zostanie fals wtedy zostanie wykonana nastepna czesc kodu
        for(let i = 0; i<= haslo.length; i++){
            if(element.innerHTML == haslo[i] ){ //sprawdz czy dana litera znajduje sie w hasle
            newOne[i] = element.innerHTML; // jeśli tak to przypis do indexu elementu newone tą wlasnie litere
            hasloContainer.innerHTML = newOne.join(''); // nastepnie dodaj nowe haslo wewnątrz html haslocontainer
            element.style.backgroundColor = 'green';
            checkTheLetter = True;
         
            }
        }
        if (checkTheLetter == false) {
            if(element.style.backgroundColor === "red"){
                console.log(element) // sprawdzdamy czy element ktory kliknelismy, czy zostal juz klikniety czy nie aby nie naliczac  bacclickcount....
            } else {
                element.style.backgroundColor = "red";
                badClickCount++
                console.log(`${badClickCount}`)
            }
            
        }
<<<<<<< HEAD
       //hasloContainer.innerHTML += element.innerHTML;
       switch(badClickCount){
            case 1:
                podest.style.display = "block";
                break;
            case 2:
                pion.style.display = "block";
                break;
            case 3:
                poziom.style.display = "block";
                break;
            case 4:
                lina.style.display = "block";
                break;
            case 5:
                glowa.style.display = "block";
                break;
            case 6:
                tulow.style.display = "block";
                break;
            case 7:
                preka.style.display = "block";
                break;
            case 8:
                lreka.style.display = "block";
                break;
            case 9: 
                pnoga.style.display = "block";
                break;
            case 10:
                lngoa.style.display = "block";
                break;
       }
=======
        invisiblePassword()
        
        
        console.log(ukryte)
        
        let badClickCount = 0;
        
        
        p.forEach( (element) => {
            element.addEventListener('click', () => {
                
                let checkTheLetter = 0; // sprawdzanie litery czy wystepuje wewnatrz hasla / domyslnie na false/ jesli jest wtedy zmienimy na true i nic nie zrobimy, a jesli zostanie fals wtedy zostanie wykonana nastepna czesc kodu
                for(let i = 0; i<= haslo.length; i++){
                    if(element.innerHTML == haslo[i] ){ //sprawdz czy dana litera znajduje sie w hasle
                    newOne[i] = element.innerHTML; // jeśli tak to przypis do indexu elementu newone tę wlasnie litere
                    hasloContainer.innerHTML = newOne.join(''); // nastepnie dodaj nowe haslo wewnątrz html haslocontainer
                    element.style.backgroundColor = 'green';
                    checkTheLetter = 1;
                    console.log(newOne) 
                    console.log(ukryte)    
                        
                    }
                }
                if (checkTheLetter == 0) {
                    if(element.style.backgroundColor === "red"){
                        console.log(element) // sprawdzdamy czy element ktory kliknelismy, czy zostal juz klikniety czy nie aby nie naliczac  bacclickcount....
                    } else {
                        element.style.backgroundColor = "red";
                        badClickCount++
                        console.log(`${badClickCount}`)
                    }
                    
                }
               //hasloContainer.innerHTML += element.innerHTML;
               switch(badClickCount){
                    case 1:
                        podest.style.display = "block";
                        break;
                    case 2:
                        pion.style.display = "block";
                        break;
                    case 3:
                        poziom.style.display = "block";
                        break;
                    case 4:
                        lina.style.display = "block";
                        break;
                    case 5:
                        glowa.style.display = "block";
                        break;
                    case 6:
                        tulow.style.display = "block";
                        break;
                    case 7:
                        preka.style.display = "block";
                        break;
                    case 8:
                        lreka.style.display = "block";
                        break;
                    case 9: 
                        pnoga.style.display = "block";
                        break;
                    case 10:
                        lngoa.style.display = "block";
                        break;
               }
               if(badClickCount == 10){
                   console.log('end');
                   const endGame = () => {
                       const endGameDiv = document.createElement('div');
                       endGameDiv.innerHTML = ` 
                       <div class="dark"></div>
                        <div class="endGameContainer">
                        <h1>YOU LOSE</h1>
                        <button class="restartGame">RESTART GAME</button>
                        </div>
                       
                        
                       `;
                       container.appendChild(endGameDiv);
                       const restartGame = document.querySelector('.restartGame')
                        restartGame.addEventListener('click', () => {
                            location.reload()
                        })
                   }
                   endGame()
                   //location.reload()
               }
               if(newOne.toString() === ukryte.toString()){
                   const winGame = document.createElement('div');
                   winGame.innerHTML = ` <div class="dark"></div>
                   <div class="endGameContainer">
                   <h1>YOU WIN</h1>
                   <button class="restartGame">RESTART GAME</button>
                   </div>`;
                   container.appendChild(winGame);
                   const restartGame = document.querySelector('.restartGame')
                        restartGame.addEventListener('click', () => {
                            location.reload()
                        })

               }

               
             
            })
           
        })
        //TU BEDZIE KOT Z ZEWNATRZ KONIEC
        
>>>>>>> 2859752... finish
    })
   
})

console.log("siemank")















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