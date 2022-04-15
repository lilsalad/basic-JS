function avg(inputArray){
    let totalSum=0;
    for(let ele of inputArray)
    {
        totalSum+=ele;
    }    
    return (totalSum/inputArray.length);
}