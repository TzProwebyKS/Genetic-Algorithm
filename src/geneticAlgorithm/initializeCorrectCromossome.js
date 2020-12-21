const newGene = require('./newGene')

module.exports = function(minimum, maximum) {
    const correctCromossome = []

    if (minimum >= maximum) {
        throw new Error('Minimum may not be bigger or equal to maximum!')
    }

    const randomNumber = Math.floor(Math.random() * maximum) + minimum
    
    for (let c = 0; c < randomNumber; c++) {
        correctCromossome.push(newGene())
    }

    return correctCromossome
}