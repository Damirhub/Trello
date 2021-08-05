import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Box} from '../../../../components/UI/Box/Box';
import {Button} from '../../../../components/UI/Button/Button';
import {
  CardDetailsWrapper,
  CardLeftWrapper,
  CardRightWrapper,
  PopoverWrapper,
  AddCommentWrapper,
} from './CardDetails.style';
import {
  changeCardName,
  getCardActions,
  getCardDetails,
  postComment,
  updateDescription,
} from '../../../../services/cardService';
import Modal from '../../../../components/UI/Modal/Modal';
import {selectCardId} from '../../../../store/reducers/cardReducer ';
import {useHistory} from 'react-router';
import {Popover} from 'react-tiny-popover';
import MoveCard from './MoveCard/MoveCard';
import {useErrorHandler} from '../../../../hooks/useErrorHandler';
import Icon from '../../../../components/UI/Icon/Icon';

const CardDetails = ({modalVisible, setModalVisible}) => {
  const history = useHistory();
  let cardId = useSelector(selectCardId);
  const errorHandler = useErrorHandler();

  const [boardShortLink, setBoardShortLink] = useState('');
  const [boardName, setBoardName] = useState('');

  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const [cardDetails, setCardDetails] = useState('');
  const [cardActions, setCardActions] = useState('');

  const handleCloseModal = () => {
    setModalVisible(false);
    boardShortLink &&
      history.push(`/b/${boardShortLink}/${boardName.replace(/\s+/g, '-').toLowerCase()}`);
  };

  // CARD NAME UPDATE
  const [cardName, setCardName] = useState();

  const changeHandler = (e) => {
    setCardName(e.target.value);
  };
  const nameBlurHandler = (e) => {
    updateName(e.target.value);
  };
  const updateName = (cardName) => changeCardName({cardId, cardName});

  // CARD DESCRIPTION UPDATE
  const [cardDescription, setCardDescription] = useState();

  const changeDescriptionHandler = (e) => {
    setCardDescription(e.target.value);
  };
  const descriptionEdit = () => {
    updateDescription({cardId, cardDescription}).catch((err) => errorHandler(err));
  };

  // ADD COMMENT
  const [addComment, setAddComment] = useState();
  const [showCommentInput, setShowCommentInput] = useState(false);

  const addCommentHandler = (e) => {
    setAddComment(e.target.value);
  };
  const commentAdd = () => {
    postComment({cardId, addComment}).catch((err) => errorHandler(err));
    setShowCommentInput(!showCommentInput);
  };

  useEffect(() => {
    cardId &&
      getCardDetails(cardId)
        .then((res) => {
          setCardDetails(res);
          setBoardName(res?.actions?.[0]?.data?.board?.name);
          setBoardShortLink(res?.actions?.[0]?.data?.board?.shortLink);
        })
        .catch((err) => {
          errorHandler(err);
        });
    getCardActions(cardId)
      .then((res) => setCardActions(res))
      .catch((err) => {
        errorHandler(err);
      });
    // eslint-disable-next-line
  }, [cardId, showCommentInput]);

  return (
    cardId && (
      <Modal isVisible={modalVisible} modalSize="xl" handleClose={handleCloseModal}>
        <CardDetailsWrapper>
          <CardLeftWrapper>
            <input
              placeholder={cardDetails && cardDetails.name}
              type="input"
              name="card_namess"
              value={cardName}
              handleChange={changeHandler}
              onBlur={nameBlurHandler}
            />
            <Box m="20px" />
            <textarea
              placeholder={
                (cardDetails && cardDetails.desc) || 'Add a more detailed description...'
              }
              type="input"
              name="card_description"
              value={cardDescription}
              onChange={changeDescriptionHandler}
            />

            <Button variant="fifth" onClick={descriptionEdit}>
              Add
            </Button>

            <Box m="20px" />

            {!showCommentInput ? (
              <h3 onClick={() => setShowCommentInput(true)}>
                {(cardActions[0]?.data?.text &&
                  cardActions[0]?.data?.text !== 'undefined' &&
                  cardActions[0].data.text) ||
                  'Click to Add!'}
              </h3>
            ) : (
              <>
                <textarea
                  label="Comment"
                  placeholder={
                    cardActions &&
                    cardActions[0]?.data &&
                    (cardActions[0]?.data?.text !== 'undefined'
                      ? cardActions[0].data.text
                      : 'Write a comment...')
                  }
                  type="input"
                  name="card_description"
                  value={addComment}
                  onChange={addCommentHandler}
                />
                <AddCommentWrapper>
                  <Button variant="fifth" onClick={commentAdd}>
                    Add
                  </Button>
                  <Icon
                    ico="close"
                    width="15px"
                    padding=" 15px"
                    inlineBlock
                    onClick={() => setShowCommentInput(!showCommentInput)}
                  />
                </AddCommentWrapper>
              </>
            )}

            <Box m="50px" />
          </CardLeftWrapper>

          <CardRightWrapper>
            <Box m=" 0 0 10px 0">
              <h2> Actions </h2>
            </Box>

            <PopoverWrapper>
              <Popover
                isOpen={!isPopoverOpen}
                position={[' bottom, left, top, right']}
                padding={10}
                onClickOutside={() => setIsPopoverOpen(true)}
                content={() => (
                  <div>
                    <MoveCard />
                  </div>
                )}
              >
                <Button
                  textLeft
                  regular
                  variant="sixth"
                  width="160px"
                  center
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  Move
                </Button>
              </Popover>
            </PopoverWrapper>
          </CardRightWrapper>
        </CardDetailsWrapper>
      </Modal>
    )
  );
};

export default CardDetails;
