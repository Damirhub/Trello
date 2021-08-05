import React, {useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import Header from '../../components/Header/Header';
import {useErrorHandler} from '../../hooks/useErrorHandler';
import {getSelectedBoard} from '../../services/boardServices';
import {boardId} from '../../store/reducers/boardReducer';
import BoardHeader from '../Board/BoardHeader/BoardHeader';
import CardDetails from '../List/Card/CardDetails/CardDetails';
import List from '../List/List';
import {BoardWrapper} from './Board.style';
import { useParams } from "react-router-dom";

const Board = () => {
  const errorHandler = useErrorHandler();
  let id = useSelector(boardId);
  console.log('id', id);

  let { page } = useParams();

  const [board, setBoard] = useState('');
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    id &&
      getSelectedBoard(id)
        .then((res) => setBoard(res))
        .catch((err) => errorHandler(err));
            // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if(page === 'c') {
      setModalVisible(true)
    } else if(page === 'b') {
      setModalVisible(false)
    }
    }, [page]);

  const name = board?.name;
  const bgColor = board?.prefs?.backgroundColor;
  const bgImage = board?.prefs?.backgroundImage;
  const permissionLevel = board?.prefs?.permissionLevel;
  const isLight = board?.prefs?.backgroundBrightness === 'light';

  return (
    board && (
      <BoardWrapper bgColor={bgColor} bgImage={bgImage}>
        <Header />
        <BoardHeader isLight={isLight} name={name} permissionLevel={permissionLevel} />
        <List bgColor={bgColor} bgImage={bgImage} id = {id} />
        <CardDetails modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </BoardWrapper>
    )
  );
};

export default Board;
