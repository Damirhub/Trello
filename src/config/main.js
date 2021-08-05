const Config = {
  auth: {
    trelloKeys: ['trello_key', 'server_token'],
    loginFields: ['email', 'password'],
  },
  board: {
    createBoard: ['board_name', 'prefs_background', 'prefs_permissionLevel'],
    createCard: ['card_name'],
    createList: ['list_name'],
    renameList: ['list_rename']
  },
  card: {
    moveCard: ['move_card_board', 'move_card_list', 'move_card_posiition'],
  },
  
};

console.log('%c Config: ', 'color: blue; font-weight: bold; font-size: 26px', Config);

export default Config;
