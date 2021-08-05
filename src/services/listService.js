import {URL} from '../constants';
import {identify} from '../helpers/identify';

export const getListDetails = (id) => {
  console.log('id', id);
  return fetch(`${URL}/1/lists/${id}?${identify()}`).then((response) => response.json());
};

export const getCards = (id) => {
  console.log('id', id);
  return fetch(`${URL}/1/lists/${id}/cards?${identify()}`).then((response) => response.json());
};

export const createCard = async (data) => {
  console.log('createBoardData', data);

  const response = await fetch(
    `${URL}/1/cards/?${identify()}&name=${data.card_name}&idList=${data.list_id}`,
    {
      method: 'POST',
    }
  );
  return await response.json();
};

export const getLists = (id) => {
  return fetch(`${URL}/1/boards/${id}/lists?${identify()}`).then((response) => response.json());
};

export const createList = (data) => {
  return fetch(`${URL}/1/lists/?${identify()}&name=${data.list_name}&idBoard=${data.board_id}`, {
    method: 'POST',
  }).then((response) => {
    return response.json();
  });
};

export const renameList = (data) => {
  return fetch(`${URL}/1/lists/${data.list_id}?${identify()}&name=${data.list_rename}`, {
    method: 'PUT',
  }).then((response) => {
    return response.json();
  });
};

export const archiveList = (listId) => {
  console.log('!!!!!!ARCHIVE', listId);
  return fetch(`${URL}/1/lists/${listId}/closed?${identify()}`, {
    method: 'PUT',
  }).then((response) => {
    return response.json();
  });
};
