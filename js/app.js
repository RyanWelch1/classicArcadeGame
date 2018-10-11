$( document ).ready(function() {
    $("#modalContent").hide();
    $("#modal").hide();
});

// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
       // x position
       this.x = x;
       // y position
       this.y = y + 55;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.swipe = 101;
    this.fly = 83;
    this.boundry = this.swipe * 5;
    this.resetPos = -this.step;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     // if not out of bounds , move forward
    // increment x by speed * dt
     if ( this.x < this.boundry){
       this.x += 300 * dt;
     }

     //else reset to beginning
     else {
       this.x = 0;
     }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
  // Knight Class
  // snippet from https://matthewcranford.com/arcade-game-walkthrough-part-6-collisions-win-conditions-and-game-resets/
  class knight {
   constructor() {
     // Properties
       this.swipe = 101;
       this.fly = 83;
       this.startX = this.swipe *2;
       this.startY = (this.fly *4) +55;
       this.x = this.startX;
       this.y = this.startY;
       this.victory = false;


       // Sprite image
       this.sprite = 'images/char-boy.png';
       }
     // methods
     render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
     }

     handleInput(input){
       switch(input) {
          case 'left':
              if (this.x >0){
                this.x -= this.swipe;
              }
            break;
          case 'up':
             if (this.y >0){
               this.y-= this.fly;
             }
             break;
          case 'right':
             if (this.x < this.swipe *4){
            this.x += this.swipe;
            }
            break;
          case 'down':
            if (this.y < this.fly *4){
              this.y += this.fly;
            }
            break;
       }
     }

     update() {
        for(let enemy of allEnemies) {

        if (this.y === enemy.y && (enemy.x + enemy.swipe/2 >this.x && enemy.x < this.x + this.swipe/2)){
          console.log("yep");
            this.reset();
        }
        if(this.y === 55) {
          this.victory = true;
        }
      }
     }

//reset to start player over
      reset() {
        this.y = this.startY;
        this.x = this.startX;
      }
}




// Place the player object in a variable called player


  const player = new knight();

//for each enemy create new Enemy into array
  const enemyOne = new Enemy(-101,0, 300);
  const enemyTwo = new Enemy(-101,83, 250);
  const enemyThree = new Enemy(-101 *2.5, 166, 355);


// Place all enemy objects in an array called allEnemies
// create array

  const allEnemies=[];
  allEnemies.push(enemyOne, enemyTwo, enemyThree);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
