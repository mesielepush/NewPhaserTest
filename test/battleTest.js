const reasonOne = 'reason One';
const reasonTwo = 'reason Two';
const reasonThree = 'reason Three';

const reasonTurn = (heroLife)=>{
    if (heroLife === 2){
        return reasonOne
    }
    if (heroLife === 1){
        return reasonTwo
        
    }
    if (heroLife === 0){
        return reasonThree
        
    }
}
const checkGameOver = (heroLife)=>{
    if (heroLife === 0){
        return 'gameover'
    }else{
        return false
    }
}

const battleFlow = (turns)=>{
    var heroLife = 2;
    
    var flow = []
    for (let i = 0; i < turns.length; i += 1) {
        var turn = turns[i];
        if (turn === 'attack'){
            flow.push([heroLife,'gameover'])
            return flow
        }
        if (turn === 'reason'){
            if (heroLife === 0){
                flow.push([-1,'gameover'])
                return flow
            }else{
                heroLife -= 1;
                flow.push([ heroLife, reasonTurn(heroLife+1)])

            }
        }
    }


}
module.exports = {
    reasonOne,
    reasonTwo,
    reasonThree,
    reasonTurn,
    checkGameOver,
    battleFlow
  };
  