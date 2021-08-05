const configurationFields = {
  trello_key: {
    name: 'trello_key',
    type: 'text',
    placeholder: 'Enter trello user key',
    classes: 'single-form-item username',
    customAttrs: {
      minlength: '10',
      maxlength: '60',
      required: true,
    },
    validationMessages: {
      required: 'This field is required',
      minlength: 'Too short',
      maxlength: 'Too long',
    },
  },
  server_token: {
    name: 'server_token',
    type: 'text',
    placeholder: 'Enter Trello server key',
    classes: 'single-form-item username',
    customAttrs: {
      minlength: '10',
      maxlength: '100',
      required: true,
    },
    validationMessages: {
      required: 'This field is required',
      minlength: 'Too short',
      maxlength: 'Too long',
    },
  },
  board_name: {
    label: 'Choose board name',
    name: 'board_name',
    type: 'text',
    placeholder: 'Enter board name',
    classes: 'single-form-item username',
    customAttrs: {
      minlength: '3',
      maxlength: '30',
      required: true,
    },
    validationMessages: {
      required: 'This field is required',
      minlength: 'Too short',
      maxlength: 'Too long',
    },
  },
  prefs_background: {
    label: 'Choose background color',
    name: 'prefs_background',
    type: 'select',
    placeholder: '',
    classes: '',
    customAttrs: {
      required: false,
    },
    validationMessages: {
      required: 'This field is required',
    },
    options: [
      {
        value: 'blue',
        text: 'Blue',
      },
      {
        value: 'orange',
        text: 'Orange',
      },
      {
        value: 'green',
        text: 'Green',
      },
      {
        value: 'red',
        text: 'Red',
      },
      {
        value: 'purple',
        text: 'Purple',
      },
      {
        value: 'pink',
        text: 'Pink',
      },
      {
        value: 'lime',
        text: 'Lime',
      },
      {
        value: 'sky',
        text: 'Sky',
      },
      {
        value: 'grey',
        text: 'Grey',
      },
    ],
  },

  prefs_permissionLevel: {
    label: 'Choose permission level',
    name: 'prefs_permissionLevel',
    type: 'select',
    placeholder: '',
    classes: '',
    customAttrs: {
      required: false,
    },
    validationMessages: {
      required: 'This field is required',
    },
    options: [
      {
        value: 'private',
        text: 'Private',
      },
      {
        value: 'org',
        text: 'Workspace',
      },
      {
        value: 'public',
        text: 'Public',
      },
    ],
  },

  card_name: {
    label: '',
    name: 'card_name',
    type: 'text',
    placeholder: 'Enter a title for this card...',
    classes: 'single-form-item',
    customAttrs: {
      // minlength: '3',
      required: true,
    },
    validationMessages: {
      required: 'This field is required',
      // minlength: 'Sorry, you need to write at least 3 characters here.',
    },
  },


  list_name: {
    // order: 2,
    label: '',
    name: 'list_name',
    type: 'text',
    placeholder: 'Enter list title...',
    classes: '',
    customAttrs: {
      minlength: '3',
      maxlength: '30',
      required: true,
    },
    validationMessages: {
      // required: 'This field is required',
      // minlength: 'Too short',
      // maxlength: 'Too long',
    },
  },

  list_rename: {
    order: 2,
    label: '',
    name: 'list_rename',
    type: 'text',
    placeholder: 'Enter new name...',
    classes: '',
    customAttrs: {
      minlength: '3',
      maxlength: '30',
      required: true,
    },
    validationMessages: {
      // required: 'This field is required',
      // minlength: 'Too short',
      // maxlength: 'Too long',
    },
  },
};

export default configurationFields;
