function calculateNumber(type, a, b) {
    let SUM, SUBTRACT, DIVIDE
    if (type == SUM) {
        return (Math.round(a) + Math.round(b))
    } else if (type == SUBTRACT) {
        return (Math.round(a) - Math.round(b))
    } else if (type == DIVIDE) {
        if (b === 0) {
            return 'Error'
        }
        return (Math.round(a) / Math.round(b))
    }
    
}
module.exports = calculateNumber
