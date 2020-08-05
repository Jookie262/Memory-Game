/*
*   Functions are located here
*/

// Fetch elements in the html
const gameScreen = document.getElementById('game-screen'); 

//Lets recreate welcome screen using vanilla javascript
let welcomeScreen = function(){

    /*
    * <div class="welcomeScreen">
    *  <img src="img/test3.png" id="gamelogo" alt="Welcome Logo"> <br>
    *  <button id="start"> <img src="img/play.png"> </button>
    * </div>
    */

    const welcome = document.createElement('div');
    welcome.classList.add('welcomeScreen');

    const img1 = document.createElement('img');
    img1.setAttribute('id','gamelogo');
    img1.setAttribute('alt','Welcome Logo');
    img1.src="img/test3.png"

    const but = document.createElement('button');
    but.setAttribute('id', 'start');

    const img2 = document.createElement('img');
    img2.src="img/play.png"

    const br = document.createElement('br');

    //Append every element to each other
    gameScreen.appendChild(welcome);
    welcome.appendChild(img1);
    welcome.appendChild(br);
    welcome.appendChild(but);
    but.appendChild(img2);

    // call playGame function when clicking a button and hides welcome screen 
    but.addEventListener('click', function(){
        welcome.classList.add('hide');
        playGame();
    });

}

// functions that starts a game

let playGame = function(){

    //Create a section with a class of grid-game
    const gameGrid = document.createElement('section');
    gameGrid.classList.add('grid-game');
    gameScreen.appendChild(gameGrid);

    //lets duplicate the cards array
    let doubleCards = cards.concat(cards);

    //shuffles the cards every reload of the page
    doubleCards.sort(function(){
        return 0.5 - Math.random();
    })

    //for every items inside the card lets create in html
    doubleCards.forEach(function(item){
        let name = item.name;
        let backgroundImage = `url(${item.img})`;

        const gameCard = document.createElement('div');
        gameCard.classList.add('card');

        gameCard.dataset.name = name;
        gameCard.style.backgroundImage = backgroundImage;

        gameGrid.appendChild(gameCard);
    });
    

}


// Call the function
welcomeScreen();