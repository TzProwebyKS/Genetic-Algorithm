module.exports = function(population, rightAnswer) {
    for (let indiv of population) {
        for (let i = 0; i < rightAnswer.length; i++) {
            if (rightAnswer[i] == indiv.cromossome[i]) {
                indiv.fitness++
            }
        }
    }
}