import {URL} from '../constants';
import {identify} from '../helpers/identify';

export const createBoard = (data) => {
  return fetch(
    `${URL}/1/boards/?${identify()}&name=${data.board_name}&prefs_permissionLevel=${
      data.prefs_permissionLevel
    }&prefs_background=${data.prefs_background}`,
    {
      method: 'POST',
    }
  ).then((response) => response.json());
};

export const getUserBoards = () => {
  return fetch(`${URL}/1/members/me/boards?${identify()}`).then((response) => response.json());
};

export const getSelectedBoard = (id) => {
  console.log('id', id);
  return fetch(`${URL}/1/boards/${id}?${identify()}`).then((response) => response.json());
};

export const deleteBoard = (id) => {
  return fetch(`${URL}/1/boards/${id}/${identify()}`, {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'access-control-allow-origin': '*',
    },
  }).then((response) => {
    return response.json();
  });
};
