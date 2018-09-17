// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
       // x position
       this.x = 0;
       // y position
       this.y = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     // if not out of bounds , move forward
     // increment x by speed * dt
     //else reset to beginning

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
  // Knight Class
  class knight {
   constructor() {
     // Properties
       this.swipe = 101;
       this.fly = 83;
       this.startX = this.swipe *2;
       this.startY = (this.fly *5) -30;
       this.x = this.startX;
       this.y = this.startY;

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
       //update position



}

// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
  //knight object
  const player = new knight();


// Place all enemy objects in an array called allEnemies
  // create array

  const allEnemies=[];

// Place the player object in a variable called player
  //for each enemy create new Enemy into array


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
