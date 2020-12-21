const newGene = require('../../newGene')

module.exports = function(correctCromossome) {
    this.cromossome = []

    for (let i = 0; i < correctCromossome.length; i++) {
        this.cromossome.push(newGene())
    }
}