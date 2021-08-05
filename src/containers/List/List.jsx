import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box} from '../../components/UI/Box/Box';
import {Button} from '../../components/UI/Button/Button';
import {Form} from '../../components/UI/Form/Form';
import Icon from '../../components/UI/Icon/Icon';
import Config from '../../config/main';
import configurationFields from '../../forms/configurationFields';
import getFormField from '../../forms/getFormField';
import useForm from '../../forms/useForm';
import {useErrorHandler} from '../../hooks/useErrorHandler';
import {createList, getLists} from '../../services/listService';
import {boardId} from '../../store/reducers/boardReducer';
import {setListsSet} from '../../store/reducers/listsReducer';
import Card from './Card/Card.jsx';
import {ListsAllWrapper, ListContainer} from './List.style';
import ListName from './ListName/ListName';

const List = ({bgColor, bgImage}) => {
  let idBoard = useSelector(boardId);

  const dispatch = useDispatch();

  const errorHandler = useErrorHandler();

  const [inputVisible, setInputVisible] = useState(false);

  const [lists, setLists] = useState('');

  useEffect(() => {
    idBoard &&
      getLists(idBoard)
        .then((res) => {
          dispatch(setListsSet(res));
          setLists(res);
        })
        .catch((err) => errorHandler(err));

    // eslint-disable-next-line
  }, []);

  const initialValues = {list_name: '', board_id: idBoard};
  const formFields = Config.board.createList;

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    backendErrors,
    touched,
    isSubmitting,
  } = useForm(createList, formFields, initialValues, handleSubmissionSuccess);

  function handleSubmissionSuccess(res) {
    console.log('Card created SUCCESSFULLY !!! with response: ', res);
    getLists(idBoard)
      .then((res) => setLists(res))
      .catch((err) => errorHandler(err));
    setInputVisible(false);
  }

  return (
    <ListsAllWrapper bgColor={bgColor} bgImage={bgImage}>
      {lists &&
        lists.map((list) => (
          <ListContainer key={list.id}>
            <ListName listId={list.id} listName={list.name} setLists={setLists} idBoard={idBoard} />

            <Card listId={list.id} />
          </ListContainer>
        ))}
      {inputVisible && (
        <ListContainer>
          <Form onSubmit={handleSubmit}>
            {formFields.map((field) =>
              getFormField(
                configurationFields[field],
                values[field],
                errors[field] || backendErrors[field],
                touched[field],
                handleBlur,
                handleChange
              )
            )}

            <Button regular variant="fifth" width="80px" disabled={isSubmitting}>
              Add List
            </Button>
            <Icon
              ico="close"
              width="15px"
              padding=" 15px"
              inlineBlock
              onClick={() => setInputVisible(false)}
            />
          </Form>
        </ListContainer>
      )}

      <Box m="0 0 0 10px">
        {!inputVisible && (
          <Button
            textLeft
            regular
            variant="second"
            width="280px"
            onClick={() => setInputVisible(true)}
          >
            + Add Another
          </Button>
        )}
      </Box>
    </ListsAllWrapper>
  );
};

export default List;
