    /* This program demonstrates a simple Neural Network using Brain.js */

(function() {

    /* Add brain to the project, and create a new Neural Network */
    const brain = require('brain.js');   
    const network = new brain.NeuralNetwork();  

    /* Add some training data. Imagine each input contains two football teams playing against each other. 
       When the team on the left side of the array wins, the output is always 0. For vice versa, the output is always 1. */
    network.train([
        {  input: [1, 3], output: [0]  },  // Team 1 is the winner
        {  input: [1, 4], output: [0]  },  // Team 1 is the winner
        {  input: [2, 3], output: [0]  },  // Team 2 is the winner
        {  input: [1, 2], output: [1]  },  // Team 2 is the winner
    ]);

    /* Run the network and save in an output variable */
    const output = network.run([2, 4]);   // In this game, team 2 should most likely win because they already have 2 wins, and 4 only has 1 loss.
    console.log(`output: ${output}`); // Remember from above, if the output is 0 or close to 0, it means the left side of the array wins. If the output is 1 or close to 1, the right side of the array wins.

})();


/* A sample run of this program logs 0.008308889344334602. This is accurate because it is very close to 0. This demonstrates that 2 was indeed the winner. */