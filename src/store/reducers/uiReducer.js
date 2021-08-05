// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   modals: [],
//   opened: {
//     approved: true,
//     declined: true,
//     requested: true,
//     pending: true,
//     getVerifiedNotification: true,
//   },
// };

// export const uiSlice = createSlice({
//   name: 'ui',
//   initialState,
//   reducers: {
//     openModal: (state, action) => {
//       state.modals = [
//         ...state.modals,
//         {
//           key: action.payload.key,
//           params: action.payload.params,
//         },
//       ];
//     },
//     closeModal: (state, action) => {
//       if (action.payload) {
//         state.modals = [
//           ...state.modals.filter((obj) => obj.key !== action.payload),
//         ];
//       } else {
//         state.modals = [];
//       }
//     },
//     openDialog: (state, action) => {
//       state.modals = [
//         ...state.modals,
//         {
//           key: 'Dialog',
//           params: action.payload,
//         },
//       ];
//     },
//     uiClose: (state, action) => {
//       state.opened = {
//         ...state.opened,
//         [action.key]: false,
//       };
//     },
//     uiLogout: () => initialState,
//   },
// });

// export const {
//   openModal,
//   closeModal,
//   openDialog,
//   uiClose,
//   uiLogout,
// } = uiSlice.actions;

// export const selectModals = (state) => state.ui.modals;

// export default uiSlice.reducer;



// // import * as actionTypes from '../actionTypes';

// // const initialState = { 
// // 	modals: [],
// // 	opened: {
// // 		approved: true,
// // 		declined: true,
// // 		requested: true,
// // 		pending: true,
// // 		getVerifiedNotification: true,
// // 	}
// // };

// // const reducer = (state = initialState, action) => {
// // 	switch (action.type) {

// // 		case actionTypes.OPEN_MODAL:
// // 			return {
// // 				...state,
// // 				modals: [...state.modals, {
// // 					key: action.key,
// // 					params: action.params
// // 				}]
// // 			};

// // 		case actionTypes.CLOSE_MODAL:
// // 			if(action.key){
// // 				return {
// // 					...state,
// // 					modals: [...state.modals.filter(obj => obj.key !== action.key)]
// // 				};
// // 			} else {
// // 				return {
// // 					...state,
// // 					modals: []
// // 				}
// // 			}

// // 		case actionTypes.UI_CLOSE:
// // 			return {
// // 				...state,
// // 				opened: {
// // 					...state.opened,
// // 					[action.key]: false
// // 				}
// // 			}

// // 		default:
// // 			return state;
// // 	}
// // };

// // export default reducer;
