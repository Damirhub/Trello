import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Form} from '../../../../components/UI/Form/Form';
import {Box} from '../../../../components/UI/Box/Box';
import {Button} from '../../../../components/UI/Button/Button';
import Config from '../../../../config/main';
import useForm from '../../../../forms/useForm';
import getFormField from '../../../../forms/getFormField';
import configurationFields from '../../../../forms/configurationFields';
import {
  CardDetailsWrapper,
  CardLeftWrapper,
  CardRightWrapper,
  PopoverWrapper,
} from './CardDetails.style';
import {createBoard} from '../../../../services/boardServices';
import {getCardDetails} from '../../../../services/cardService';
import Modal from '../../../../components/UI/Modal/Modal';
import {selectCardId} from '../../../../store/reducers/cardReducer ';
import {useHistory} from 'react-router';
import {Popover} from 'react-tiny-popover';
import MoveCard from './MoveCard/MoveCard';

const CardDetails = ({modalVisible, setModalVisible}) => {
  const history = useHistory();
  let cardId = useSelector(selectCardId);

  const [boardShortLink, setBoardShortLink] = useState('');
  const [boardName, setBoardName] = useState('');

  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const [cardDetails, setCardDetails] = useState('');

  const initialValues = {
    card_name: cardDetails && cardDetails.name,
    card_description: cardDetails && cardDetails.desc,
  };
  const formFields = Config.card.cardDetails;

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
    setModalVisible(false);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
    boardShortLink &&
      history.push(`/b/${boardShortLink}/${boardName.replace(/\s+/g, '-').toLowerCase()}`);
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
          console.log(err);
        });
  }, [cardId]);

  return (
    cardId && (
      <Modal isVisible={modalVisible} modalSize="xl" handleClose={handleCloseModal}>
        <CardDetailsWrapper>
          <CardLeftWrapper>
            <h3>{cardDetails.name}</h3>
            <Form onSubmit={handleSubmit}>
              <Box m="15px 10px 0px 10px">
                {formFields.map(
                  (field) =>
                    field === 'card_name' &&
                    getFormField(
                      configurationFields[field],
                      values[field],
                      errors[field] || backendErrors[field],
                      touched[field],
                      handleBlur,
                      handleChange
                    )
                )}

                {formFields.map(
                  (field) =>
                    field !== 'card_name' &&
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
            </Form>
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
                  isSubmitting={isSubmitting}
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
