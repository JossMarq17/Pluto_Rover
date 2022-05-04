
function roverGirar (instrucciones){

        if (instrucciones == "L"){
            return "0, 0, O";
        } else if (instrucciones == "R"){
            return "0, 0, E";
        } else {
            return "Error";
        }
}

module.exports = roverGirar;