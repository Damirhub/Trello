import React, {useState, useEffect, Fragment} from 'react';

import {IconFont} from '../../../components/UI/IconFont/IconFont';
import {getUserBoards, deleteBoard} from '../../../services/boardServices';
import {
  BoardsSection,
  BoardsListWrapper,
  BoardPreviewWrapper,
  CreateBoardWrapper,
  ButtonsWrapper,
} from './BoardsList.style';
import {useErrorHandler} from '../../../hooks/useErrorHandler';
import {useDispatch} from 'react-redux';
import {setBoardId, setAllBoards} from '../../../store/reducers/boardReducer';
import {useHistory} from 'react-router';
import Modal from '../../../components/UI/Modal/Modal';
import CreateBoard from '../CreateBoard/CreateBoard';
import {Button} from '../../../components/UI/Button/Button';

const BoardsList = () => {
  const errorHandler = useErrorHandler();
  const history = useHistory();
  const dispatch = useDispatch();

  const [userBoards, setUserBoards] = useState([]);

  useEffect(() => {
    getUserBoards()
      .then((res) => {
        setUserBoards(res);
        dispatch(setAllBoards(res));
      })
      .catch((err) => errorHandler(err));
    // eslint-disable-next-line
  }, []);

  const selectBoard = (id, shortLink, name) => {
    dispatch(setBoardId(id));
    history.push(`/b/${shortLink}/${name.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const archiveBoardHandler = (boardId) => {
    console.log('Reopen Archived Board', boardId);
  };

  const deleteBoardHandler = (boardId) => {
    console.log('boardId', boardId);
    deleteBoard(boardId)
      .then((res) => setUserBoards(res))
      .catch((err) => errorHandler(err));
    getUserBoards()
      .then((res) => setUserBoards(res))
      .catch((err) => errorHandler(err));
  };

  let closedExist = userBoards && userBoards.find((el) => el.closed === true);

  return (
    <>
      <BoardsSection>
        <h4>
          <IconFont fontFamily="glyphicons" icon="user" />
          Your Workspace boards
        </h4>
        <BoardsListWrapper>
          {userBoards.map(
            (board) =>
              !board.closed && (
                <BoardPreviewWrapper
                  key={board.id}
                  bgImage={board.prefs.backgroundImageScaled}
                  backgroundColor={board.prefs.backgroundColor}
                  onClick={() => selectBoard(board.id, board.shortLink, board.name)}
                >
                  <p> {board.name} </p>
                </BoardPreviewWrapper>
              )
          )}

          <CreateBoardWrapper
            onClick={() => {
              setModalVisible(true);
            }}
          >
            <div>
              <p> Create new board </p>
            </div>
          </CreateBoardWrapper>
        </BoardsListWrapper>

        <section>
          {closedExist && (
            <h4>
              <IconFont fontFamily="glyphicons" icon="remove" />
              Closed Boards
            </h4>
          )}
          {userBoards && (
            <BoardsListWrapper>
              {userBoards.map((board) => {
                let boardId = board.id;
                return (
                  board?.closed && (
                    <Fragment key={boardId}>
                      <BoardPreviewWrapper
                        bgImage={board.prefs.backgroundImageScaled}
                        backgroundColor={board.prefs.backgroundColor}
                        onClick={() => selectBoard(board.id, board.shortLink, board.name)}
                      >
                        <p> {board.name} </p>
                      </BoardPreviewWrapper>
                      <ButtonsWrapper>
                        <Button variant="fifth" onClick={() => archiveBoardHandler(boardId)}>
                          Reopen
                        </Button>
                        <Button variant="danger" onClick={() => deleteBoardHandler(boardId)}>
                          Delete
                        </Button>
                      </ButtonsWrapper>
                    </Fragment>
                  )
                );
              })}
            </BoardsListWrapper>
          )}
        </section>
      </BoardsSection>

      <Modal isVisible={modalVisible} handleClose={() => setModalVisible(false)}>
        <CreateBoard setModalVisible={setModalVisible} setUserBoards={setUserBoards} />
      </Modal>
    </>
  );
};

export default BoardsList;
