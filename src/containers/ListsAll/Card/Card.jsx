import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../../components/UI/Button/Button';
import {Form} from '../../../components/UI/Form/Form';
import Icon from '../../../components/UI/Icon/Icon';
import Config from '../../../config/main';
import configurationFields from '../../../forms/configurationFields';
import getFormField from '../../../forms/getFormField';
import useForm from '../../../forms/useForm';
import {useErrorHandler} from '../../../hooks/useErrorHandler';
import {getCards, createCard} from '../../../services/listService';
import {CardWrapper, CardNameWrapper} from './Card.style';
import {useHistory} from 'react-router';
import {setCardId} from '../../../store/reducers/cardReducer ';
import {selectCardId} from '../../../store/reducers/cardReducer ';

const Card = ({listId}) => {
  const [cards, setCards] = useState('');

  const [adding, setAdding] = useState(false);

  let selectedId = useSelector(selectCardId);

  const errorHandler = useErrorHandler();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    listId &&
      getCards(listId)
        .then((res) => setCards(res))
        .catch((err) => errorHandler(err));
    // eslint-disable-next-line
  }, []);

  const initialValues = {card_name: '', list_id: listId && listId};
  const formFields = Config.board.createCard;

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    backendErrors,
    touched,
    isSubmitting,
  } = useForm(createCard, formFields, initialValues, handleSubmissionSuccess);

  function handleSubmissionSuccess(response) {
    console.log('Card created SUCCESSFULLY !!! with response: ', response);
    getCards(listId)
      .then((res) => setCards(res))
      .catch((err) => errorHandler(err));
    values.card_name = '';
  }

  const selectCard = (name, id, shortLink) => {
    dispatch(setCardId(id));
    selectedId && history.push(`/c/${shortLink}/${name.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    listId &&
    cards && (
      <CardWrapper>
        {cards.map((card) => (
          <CardNameWrapper
            onClick={() => selectCard(card.name, card.id, card.shortLink)}
            key={card.id}
          >
            <p>
              {card.name}
              <Icon ico="pen" width="10px" padding="0" inlineBlock />
            </p>
          </CardNameWrapper>
        ))}
        {adding && (
          <>
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
                Add card
              </Button>
              <Icon
                ico="close"
                width="15px"
                padding=" 15px"
                inlineBlock
                onClick={() => setAdding(false)}
              />
            </Form>
          </>
        )}

        {!adding && (
          <Button
            textLeft
            onClick={() => setAdding(true)}
            regular
            variant="third"
            width="260px"
            center
          >
            + Add another card
          </Button>
        )}
      </CardWrapper>
    )
  );
};

export default Card;
