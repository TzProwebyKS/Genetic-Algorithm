const Individual = require('./Individual/Individual')

module.exports = function(population, performanceHistory, correctCromossome, mutationRate) {
    population.sort((a, b) => b.fitness - a.fitness)
    performanceHistory.push(correctCromossome.length - population[0].fitness)

    const fittestCromossome = population[0].cromossome.slice()
        
    for (let i = 1; i < population.length; i++) {
        // population[0] is the best individual
        population[i] = new Individual(population[i].breed(fittestCromossome))

        // population[i] = new Individual(fittestCromossome)
        
        if (Math.random() <= mutationRate) {
            population[i].mutateRandomGene()
        }
    }

    population[0] = new Individual(fittestCromossome)
}

