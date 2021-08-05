import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Form} from '../../../../../components/UI/Form/Form';
import {Box} from '../../../../../components/UI/Box/Box';
import {Button} from '../../../../../components/UI/Button/Button';
import Config from '../../../../../config/main';
import useForm from '../../../../../forms/useForm';

import {moveCard} from '../../../../../services/cardService';
import {selectCardId} from '../../../../../store/reducers/cardReducer ';
import {MoveCardWrapper} from './MoveCard.style';
import {Select} from '../../../../../components/UI/Select/Select';
import {selectLists} from '../../../../../store/reducers/listsReducer';
import {selectAllBoards} from '../../../../../store/reducers/boardReducer';

const MoveCard = () => {
  let cardId = useSelector(selectCardId);
  let lists = useSelector(selectLists);
  let boards = useSelector(selectAllBoards);

  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const initialValues = {card_id: cardId, move_card_board: '', move_card_list: ''};
  const formFields = Config.card.moveCard;
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    // values,
    errors,
    backendErrors,
    touched,
    isSubmitting,
  } = useForm(moveCard, formFields, initialValues, handleSubmissionSuccess);

  function handleSubmissionSuccess(res) {
    console.log('Card moved SUCCESSFULLY !!! with response: ', res);
  }

  let listOptions = [];
  let boardOptions = [];

  lists && lists.map((list) => listOptions.push({text: list.name, value: list.id}));
  boards && boards.map((board) => boardOptions.push({text: board.name, value: board.id}));

  return (
    cardId && (
      <MoveCardWrapper>
        <Box m="15px 10px 0px 10px">
          <h3>Select Destination to move</h3>
          <br />

          <Form onSubmit={handleSubmit}>
            <Select
              key="move_card_board"
              type="select"
              name="move_card_board"
              label="Board"
              handleChange={handleChange}
              handleBlur={handleBlur}
              options={boardOptions}
              errors={errors}
              backendErrors={backendErrors}
              touched={touched}
            />

            <Select
              key="move_card_list"
              name="move_card_list"
              type="select"
              label="List"
              handleChange={handleChange}
              handleBlur={handleBlur}
              options={listOptions}
              errors={errors}
              backendErrors={backendErrors}
            />

            <Button
              regular
              variant="fifth"
              width="160px"
              center
              disabled={isSubmitting}
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
              Move
            </Button>
          </Form>
        </Box>
      </MoveCardWrapper>
    )
  );
};

export default MoveCard;
