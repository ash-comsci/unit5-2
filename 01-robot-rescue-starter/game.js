// ROBOT RESCUE — edit this file. Find TODO 1–7.
// The browser support supplies command, drawing functions and buttons.
var playerX, playerY, energy, moves, hasKey, gameOver;

function start() {
    playerX = 0;
    playerY = 0;
    energy = 18;
    moves = 0;
    hasKey = false;
    gameOver = false;
    say('Starter mode: movement works. Complete TODO 1–7 to build the rules!');
}

function takeTurn() {
    // TODO 1: If gameOver is true, return immediately.
    var nextX = playerX;
    var nextY = playerY;
    if (command == 'up') {
        nextY = nextY - 1;
    } else if (command == 'down') {
        nextY = nextY + 1;
    } else if (command == 'left') {
        nextX = nextX - 1;
    } else if (command == 'right') {
        nextX = nextX + 1;
    } else {
        return;
    }
    // TODO 2: Reject coordinates outside 0..5. Give feedback and return.
    // The starter is safely clamped below, but it needs a clear rejection rule.
    if (nextX >= 0 && nextX <= 5 && nextY >= 0 && nextY <= 5) {
        playerX = nextX;
        playerY = nextY;
        // TODO 3: Increase moves by 1 and decrease energy by 1.
        say('Moved. Now add the key, hazard, energy and ending rules.');
        // TODO 4: At (2,1), collect the key only if it has not been collected.
        // TODO 5: At (3,2), subtract 3 extra energy and show a warning.
        // TODO 6: At (5,5), win if hasKey AND energy >= 0;
        // otherwise explain that the key is missing.
        // TODO 7: Unless already won, energy <= 0 ends the game in a loss.
        // A successful escape on the last unit of energy counts as a win.
    }
    draw();
}

function draw() {
    clearBoard();
    // Add a for loop and a nested for loop to draw all 36 floor cells.
    // The cell(column,row,label,colour) helper draws one square.
    // Example: cell(0,0,'','#20334d');
    cell(5,5,'EXIT','#664798');
    cell(3,2,'HAZARD','#933d58');
    if (!hasKey) {
        cell(2,1,'KEY','#81651a');
    }
    robot(playerX,playerY);
    stats('Energy: '+energy+' | Moves: '+moves+' | Key: '+hasKey);
}
