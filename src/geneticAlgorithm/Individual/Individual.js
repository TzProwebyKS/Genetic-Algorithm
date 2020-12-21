function Individual(childsCromossome, correctCromossome) {
    this.fitness = 0
    
    if (childsCromossome) {
        this.cromossome = childsCromossome.slice()
    }
    else {
        this._initializeCromossome(correctCromossome)
    }
}

Individual.prototype.breed = require('./prototypes/breed')
Individual.prototype.mutateRandomGene = require('./prototypes/mutateRandomGene')
Individual.prototype._initializeCromossome = require('./prototypes/_initializeCromossome')

module.exports = Individual