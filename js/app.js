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

}


// Call the function
welcomeScreen();