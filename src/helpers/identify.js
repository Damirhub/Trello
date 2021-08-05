import store from '../store';

export const identify = () => {
  const token = store.getState().auth.server_token;
  const key = store.getState().auth.trello_key;
  return `key=${key}&token=${token}`;
};
