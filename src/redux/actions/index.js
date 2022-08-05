export const TOKEN = 'TOKEN';

const requestToken = (payload) => ({
  type: TOKEN,
  payload,
});

export const fetchToken = () => async (dispatch) => {
  const URL = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(URL);
  const data = await response.json();
  dispatch(requestToken(data.token));
  localStorage.setItem('token', data.token);
};

// fetchToken();
