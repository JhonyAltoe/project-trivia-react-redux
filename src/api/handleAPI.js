export const fetchToken = async () => {
  const result = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await result.json();
  return data;
};

export const fetchQuestionsAndAnswers = async (
  token,
  configs = {
    type: '',
    category: '',
    difficulty: '',
  },
  questionQuantity = '5',
) => {
  const result = await fetch(`https://opentdb.com/api.php?amount=${questionQuantity}&category=${configs.category}&difficulty=${configs.difficulty}&type=${configs.type}&token=${token}`);
  const data = await result.json();
  return data;
};

export const fetchCategories = async () => {
  const result = await fetch('https://opentdb.com/api_category.php');
  const data = await result.json();
  return data;
};
