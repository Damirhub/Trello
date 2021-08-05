import {URL} from '../constants';
import {identify} from '../helpers/identify';

export const getCardData = async (id) => {
  const response = await fetch(`${URL}/1/cards/${id}?${identify()}`);
  return await response.json();
};

export const getCardDetails = async (id) => {
  const response = await fetch(
    `${URL}/1/cards/${id}?${identify()}&actions=commentCard%2CcreateCard%2CcopyCard&actions_limit=50`
  );
  return await response.json();
};

export const getCardActions = async (id) => {
  const response = await fetch(`${URL}/1/cards/${id}/actions?${identify()}`);
  return await response.json();
};

export const changeCardName = async (data) => {
  console.log('%cdata', 'color: tomato; font-size: 14px;', data);
  
  const response = await fetch(
    `${URL}/1/cards/${data.cardId}&name=${data.cardName}`,
    {
      method: 'PUT',
    }
  );
  return await response.json();
};

export const updateDescription = async (data) => {
  console.log('%cdata', 'color: tomato; font-size: 14px;', data);
  
  const response = await fetch(
    `${URL}/1/cards/${data.cardId}&desc=${data.cardDescription}`,
    {
      method: 'PUT',
    }
  );
  return await response.json();
};

// actions=commentCard%2CcopyCommentCard%2CcreateCard%2CcopyCard&actions_display=true&action_memberCreator_fields=activityBlocked%2CavatarUrl%2Cbio%2CbioData%2Cconfirmed%2CfullName%2CidEnterprise%2CidMemberReferrer%2Cinitials%2CmemberType%2CnonPublic%2Cproducts%2Curl%2Cusername%2CidPremOrgsAdmin&action_reactions=true&members=true&member_fields=activityBlocked%2CavatarUrl%2Cbio%2CbioData%2Cconfirmed%2CfullName%2CidEnterprise%2CidMemberReferrer%2Cinitials%2CmemberType%2CnonPublic%2Cproducts%2Curl%2Cusername&attachments=true&fields=email&checklists=all&checklist_fields=all&list=true&pluginData=true&customFieldItems=true&actions_limit=50

export const postComment = async (data) => {
  const response = await fetch(
    `${URL}/1/cards/${data.cardId}/actions/comments?${identify()}&text=${data.addComment}`,
    {
      method: 'POST',
    }
  );
  return await response.json();
};

export const moveCard = async (data) => {
  console.log(
    '%ccardId, move_card_board, move_card_list',
    'color: aqua; font-size: 14px;',
    data.card_id,
    data.move_card_board,
    data.move_card_list
  );

  const response = await fetch(
    `${URL}/1/lists/${data.card_id}/moveAllCards?${identify()}&idBoard=${
      data.move_card_board
    }&idList=${data.move_card_list}`,
    {
      method: 'POST',
    }
  );
  return await response.json();
};
