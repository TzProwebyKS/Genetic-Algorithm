const { plot } = require('nodeplotlib')

module.exports = function(perfomanceHistory) {
    const data = [{x: [], y: [], type: 'line'}]

    for (let i = 0; i < perfomanceHistory.length; i++) {
        data[0].x.push(i)
        data[0].y.push(perfomanceHistory[i])
    }

    plot(data)
}