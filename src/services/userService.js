import {URL} from '../constants';

export const getUser = (data) => {
  return fetch(
    `${URL}/1/members/me/?key=${data.trello_key}&token=${data.server_token}`
  ).then((response) => response.json());
};
