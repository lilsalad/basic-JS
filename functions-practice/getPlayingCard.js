function pickRandomElement(arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
}

function getCard(){
    const valueList = ['2','3','4','5','6','7','8','9','10','A','J','Q','K'];
    const suitList = ['clubs','spades','diamonds','hearts'];
    
    const value = pickRandomElement(valueList);
    const suit = pickRandomElement(suitList);
    
    return {value: value, suit: suit};
}