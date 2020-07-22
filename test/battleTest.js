const reasonOne = 'reason One';
const reasonTwo = 'reason Two';
const reasonThree = 'reason Three';
// eslint-disable-next-line
const reasonTurn = (heroLife) => {
  if (heroLife === 2) {
    return reasonOne;
  }
  if (heroLife === 1) {
    return reasonTwo;
  }
  if (heroLife === 0) {
    return reasonThree;
  }
};
const checkGameOver = (heroLife) => {
  if (heroLife === 0) {
    return 'gameover';
  }
  return false;
};
// eslint-disable-next-line
const battleFlow = (turns) => {
  let heroLife = 2;

  const flow = [];
  for (let i = 0; i < turns.length; i += 1) {
    const turn = turns[i];
    if (turn === 'attack') {
      flow.push([heroLife, 'gameover']);
      return flow;
    }
    if (turn === 'reason') {
      if (heroLife === 0) {
        flow.push([-1, 'gameover']);
        return flow;
      }
      heroLife -= 1;
      flow.push([heroLife, reasonTurn(heroLife + 1)]);
    }
  }
};
module.exports = {
  reasonOne,
  reasonTwo,
  reasonThree,
  reasonTurn,
  checkGameOver,
  battleFlow,
};
