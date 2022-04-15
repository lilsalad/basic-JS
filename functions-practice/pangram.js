function chkPangram(inputString){
    let chkString=inputString.toLowerCase();
    let alphabetString='abcdefghijklmnopqrstuvwxyz';
    for (let letter of alphabetString){
        if(chkString.indexOf(letter) == -1){
            return false;
        }
    }
    return true;
}