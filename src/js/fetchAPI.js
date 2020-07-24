
const postUserScore = (user = '', score = 0) => {
  const gameId = 'qQoqk1gkayHLKFrWyUjz';

  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const postData = {
    user,
    score,
  };
  const request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  fetch(request)
    .then(response => response.json())

    .catch(err => err);
};
const getScoresTable = async () => {
  const gameId = 'qQoqk1gkayHLKFrWyUjz';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const data = await fetch(url);
  const scoreResponse = await data.json();

  return {
    scoreResponse,
  };
};
export {
  postUserScore,
  getScoresTable,

};