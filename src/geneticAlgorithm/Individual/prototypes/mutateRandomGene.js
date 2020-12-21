const newGene = require('../../newGene')

module.exports = function() {
    const randomIndex = Math.floor(Math.random() * this.cromossome.length)

    this.cromossome[randomIndex] = newGene()
}