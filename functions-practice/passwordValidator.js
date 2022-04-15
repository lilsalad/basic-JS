function chkPassword(user, pass){
    if((pass.length < 8) || (pass.indexOf(' ') !== -1) || (pass.indexOf(user) !== -1))
    {
        return false;
    }
    return true;
}