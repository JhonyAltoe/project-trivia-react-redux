export const fetchToken = async () => {
  const result = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await result.json();
  return data;
};

export const fetchQuestionsAndAnswers = async (
  token,
  configs,
) => {
  let result = '';
  if (configs.type !== '' || configs.difficulty !== '' || configs.category !== '') {
    result = await fetch(`https://opentdb.com/api.php?amount=5&category=${configs.category}&difficulty=${configs.difficulty}&type=${configs.type}&token=${token}`);
  } else {
    result = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  }
  const data = await result.json();
  return data;
};

export const fetchTest = async (configs) => {
  const result = await fetch(`https://opentdb.com/api.php?amount=5&category=${configs.category}&difficulty=${configs.difficulty}&type=${configs.type}`);
  const data = await result.json();
  return data;
};

export const fetchCategories = async () => {
  const result = await fetch('https://opentdb.com/api_category.php');
  const data = await result.json();
  return data;
};
