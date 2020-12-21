const Individual = require('./Individual/Individual')

module.exports = function(popSize, correctCromossome) {
    if (popSize < 2) {
        throw new Error('Please, initialize more than 2 individuals!')
    }

    const population = []

    for (let c = 0; c < popSize; c++) {
        population.push(new Individual(null, correctCromossome))
    }

    return population
}