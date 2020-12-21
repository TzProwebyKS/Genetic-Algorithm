const improvePopulation = require('../geneticAlgorithm/improvePopulation')
const calcFitness = require('../geneticAlgorithm/calcFitness')

module.exports = function(mutationRate, population, correctCromossome, performanceHistory) {
    while (true) {
        calcFitness(population, correctCromossome)

        if (population[0].fitness == correctCromossome.length) {
            break
        }

        improvePopulation(population, performanceHistory, correctCromossome, mutationRate)
    }
}