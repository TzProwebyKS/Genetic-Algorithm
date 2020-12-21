const initializeCorrectCromossome = require('./geneticAlgorithm/initializeCorrectCromossome')
const initializeIndividuals = require('./geneticAlgorithm/initializeIndividuals')
const plotPerformanceHistory = require('./functions/plotPerfomanceHistory')
const run = require('./functions/run')

// Config
const min = 3
const max = 300
const popSize = 2
const mutationRate = 1

const performanceHistory = []
const correctCromossome = initializeCorrectCromossome(min, max)
const population = initializeIndividuals(popSize, correctCromossome)

function setup() {
    run(mutationRate, population, correctCromossome, performanceHistory)
    plotPerformanceHistory(performanceHistory)
}

setup()