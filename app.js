const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //play match 
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer options 
        const computerOptions = ['rock','paper','scissors'];

        options.forEach(option => {
            option.addEventListener("click", function(){
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //here is where we call compare hands 
                compareHands(this.textContent, computerChoice);

                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
     };

     const updateScore = () =>{
         const playerScore = document.querySelector('.player-score p');
         const computerScore = document.querySelector('.computer-score p');
         playerScore.textContent = pScore;
         computerScore.textContent = cScore;

     }

     const compareHands = (playerChoice, computerChoice) => {
         //update Text h1
         const winner = document.querySelector('.winner');
         //checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It Is a tie';
            return;
        }
        //cchecking for a rock 
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            };
        };
        //checking for paper 
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            };
        };
        //ccecking for a scissor
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            };
        };
     };

    // call all inner functions 
    startGame();
    playMatch();
    //updateScore();
};
// Start game function
game();
