function roverMovGir (instrucciones){

    let arregloInstr = Array.from(instrucciones);
    let x = 0;
    let y = 0;
    let orientacion = "N";


    for (i=0; i<=arregloInstr.length; i++){
        if (arregloInstr[i] == "F"){
            return y += 1;
        } else if (arregloInstr[i] == "B"){
            return y -= 1;
        } else if (arregloInstr[i] == "R"){
            return x += 1;
        } else if (arregloInstr[i] == "L"){
            return x -= 1;
        } else {
            return "Error";
        }
    }


    //function orientacionFunc(){
        for (i=0; i<=arregloInstr.length; i++){
            if (arregloInstr[i] == "R"){
                return orientacion += 90;
            } else if (arregloInstr[i] == "L"){
                return orientacion -= 90;
            } else {
                return "Error";
            }
        }

        if ((orientacion / 90) == 0){
            return orientacion = "N";
        } else if ((orientacion / 90) == 1 || (orientacion / 90) == -3){
            return orientacion = "E";
        } else if ((orientacion / 90) == 2 || (orientacion / 90) == -2){
            return orientacion = "S";
        } else if ((orientacion / 90) == 3 || (orientacion / 90) == -1){
            return orientacion = "O";
        }
    //}


    return x, y, orientacion;
}

module.exports = roverMovGir;