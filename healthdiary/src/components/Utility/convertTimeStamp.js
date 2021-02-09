var moment = require('moment')
moment().format()

exports.timesStampToString = (timeStamp) => {
    let date = new Date(timeStamp)
    return moment(date).format('YYYY-MM-DD')
}
exports.stringToTimeStamp = (date) => {
    return moment(date,'YYYY-MM-DD').valueOf()
    
}