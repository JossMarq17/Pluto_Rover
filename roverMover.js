
function roverMover (instrucciones){

        if (instrucciones == "F"){
            return "0, 1, N";
        } else if (instrucciones == "B"){
            return "0, 10, N";
        } else {
            return "Error";
        }
}

module.exports = roverMover;