    /* This program demonstrates a "Long Short Term Memory" Neural Network using Brain.js
       This method is used to test strings like sentences or words. It takes longer than just using numbers. The default option for iterations is 20,000  
       More iterations = more accurate = takes longer to run the program */

    (function() {

        /* Add brain to the project, and create a new Neural Network */
        const brain = require('brain.js');
        const data = require('./data.json');   // Pull the training data from a JSON file
        const network = new brain.recurrent.LSTM(); 
    
        /* Map through the data in the JSON file and run an arrow function. Each text is mapped to the input, and each language is mapped to the output. */
        const trainingData = data.map(item => ({  
            input: item.text,
            output: item.language
        }));
  
        network.train(trainingData, {
            iterations: 100   /* We are setting a configuration option. Setting iterations to a small number because it run a lot quicker than the default 20,000 iterations */
        });

        /* Test the network using a Greek sentence meaning "How much is it?". The program should correctly guess Greek. */
        const output = network.run("Πόσο κάνει αυτό");
        console.log(`The language of your text is ${output}.`);    
    
    })();
    
    
    /* On a sample run, the program successfully answered correctly. Note: Even just 100 iterations took my computer 9 seconds to run. The default 20,000 iterations would take very long.
        However, a much larger data set would benefit from using the default 20,000 iterations.   */