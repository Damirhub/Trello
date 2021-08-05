import React from 'react';
import {Form} from '../../../components/UI/Form/Form';
import {Box} from '../../../components/UI/Box/Box';
import {Button} from '../../../components/UI/Button/Button';
import Config from '../../../config/main';
import useForm from '../../../forms/useForm';
import getFormField from '../../../forms/getFormField';
import configurationFields from '../../../forms/configurationFields';
import {CreateBoardModalWrapper} from './CreateBoard.style';
import {isEmpty} from 'lodash';
import {createBoard, getUserBoards} from '../../../services/boardServices';
import {useErrorHandler} from '../../../hooks/useErrorHandler';

const CreateBoard = ({setModalVisible, setUserBoards}) => {
  const errorHandler = useErrorHandler();

  const initialValues = {
    board_name: '',
    prefs_background: 'blue',
    prefs_permissionLevel: 'org',
  };
  const formFields = Config.board.createBoard;
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    backendErrors,
    touched,
    isSubmitting,
  } = useForm(createBoard, formFields, initialValues, handleSubmissionSuccess);

  function handleSubmissionSuccess(res) {
    console.log('Board creation SUCCESSFUL !!! with response: ', res);
    getUserBoards()
      .then((res) => setUserBoards(res))
      .catch((err) => errorHandler(err));
    setModalVisible(false);
  }

  return (
    <CreateBoardModalWrapper>
      <Box textAlign="center" m="0 auto">
        <Box p="0px 50px 40px 50px">
          <h2>Create board</h2>
          <Box m="15px auto 30px auto">
            <p>Enter board name to crate board</p>
          </Box>

          <Form onSubmit={handleSubmit}>
            <Box m="15px 10px 10px 10px">
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
            </Box>

            <div>
              <Box m="20px 10px 0" inline>
                <Button
                  type="button"
                  height="40px"
                  width="180px"
                  isGhost
                  onClick={() => setModalVisible(false)}
                >
                  Cancel
                </Button>
              </Box>
              <Box m="10px" inline>
                <Button
                  type="submit"
                  height="40px"
                  disabled={!isEmpty(errors) || isSubmitting}
                  width="180px"
                >
                  Create Board
                </Button>
              </Box>
            </div>
          </Form>
        </Box>
      </Box>
    </CreateBoardModalWrapper>
  );
};

export default CreateBoard;
