module.exports = function(partnerCromossome) {
    const childsCromossome = []
    const randomSplit = Math.floor(Math.random() * this.cromossome.length)

    for (let i = 0; i < this.cromossome.length; i++) {
        if (randomSplit < i) {
            childsCromossome.push(this.cromossome[i])
        }
        else {
            childsCromossome.push(partnerCromossome[i])
        }
    }
    
    return childsCromossome
}