import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Box} from '../../../components/UI/Box/Box';
import {Button} from '../../../components/UI/Button/Button';
import {Form} from '../../../components/UI/Form/Form';
import Icon from '../../../components/UI/Icon/Icon';
import Config from '../../../config/main';
import configurationFields from '../../../forms/configurationFields';
import getFormField from '../../../forms/getFormField';
import useForm from '../../../forms/useForm';
import {useErrorHandler} from '../../../hooks/useErrorHandler';
import {renameList, getLists, archiveList} from '../../../services/listService';
import {boardId} from '../../../store/reducers/boardReducer';
import {ListsRenameWrapper} from './ListName.style';

const ListName = ({listId, listName, setLists}) => {
  let id = useSelector(boardId);

  const [inputVisible, setInputVisible] = useState(false);

  const errorHandler = useErrorHandler();

  const formFields = Config.board.renameList;
  const initialValues = {list_rename: '', list_id: listId};

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    backendErrors,
    touched,
    isSubmitting,
  } = useForm(renameList, formFields, initialValues, handleSubmissionSuccess);

  function handleSubmissionSuccess(res) {
    console.log('Card created SUCCESSFULLY !!! with response: ', res);
    getLists(id)
      .then((res) => setLists(res))
      .catch((err) => errorHandler(err));
    setInputVisible(false);
  }

  const archiveListHandler = () => {
    archiveList(listId)
      .then((res) => {
        console.log('%cresponse', 'color: gold; font-size: 14px;', res);
      })
      .catch((err) => errorHandler(err));
  };

  return (
    <ListsRenameWrapper>
      <Box m=" 10px">
        <h3 onClick={() => setInputVisible(true)}>
          {listName} <Icon ico="pen" width="10px" padding="0" inlineBlock />
        </h3>
      </Box>

      {inputVisible && (
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
          <section>
            <Button regular variant="fifth" width="80px" disabled={isSubmitting}>
              Rename
            </Button>
            <Button
              regular
              variant="danger"
              width="80px"
              disabled={isSubmitting}
              onClick={() => archiveListHandler(listId)}
            >
              Archive
            </Button>
            <Icon
              ico="close"
              width="15px"
              padding=" 15px"
              inlineBlock
              onClick={() => setInputVisible(false)}
            />
          </section>
        </Form>
      )}
    </ListsRenameWrapper>
  );
};

export default ListName;
