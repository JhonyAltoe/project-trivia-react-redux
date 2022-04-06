export const fetchToken = async () => {
  const result = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await result.json();
  return data;
};

export const fetchQuestionsAndAnswers = async (token, questionQuantity = '5') => {
  const result = await fetch(`https://opentdb.com/api.php?amount=${questionQuantity}&token=${token}`);
  const data = await result.json();
  return data;
};
