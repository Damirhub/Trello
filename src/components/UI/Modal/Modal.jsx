import React, {useState, useEffect} from 'react';

import {ModalWrapper, ModalContainer} from './Modal.style';

import Icon from '../Icon/Icon';

let instancesCount = 0;

const Modal = ({
  children,
  isVisible,
  handleClose,
  modalSize,
  modalRef,
  isClosableModal = true,
  hideBodyScroll = false,
  ...rest
}) => {
  const [isBackdropVisible, setIsBackdropVisible] = useState(isVisible);
  const [isModalVisible, setIsModalVisible] = useState(isVisible);
  const [isBackdropOpacity, setIsBackdropOpacity] = useState(isVisible);
  const [isMounted, setIsMounted] = useState(false);

  const props = {};

  if (modalRef) {
    props.ref = modalRef;
  }

  useEffect(() => {
    if (hideBodyScroll) {
      instancesCount += 1;
      if (instancesCount > 0) {
        if (document.body.style.position !== 'fixed') {
          let topPosition = document.documentElement.scrollTop;
          document.body.style.position = 'fixed';
          document.body.style.top = `-${topPosition}px`;
        }
      } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      if (hideBodyScroll) {
        instancesCount -= 1;
        if (instancesCount > 0) {
          if (document.body.style.position !== 'fixed') {
            let topPosition = document.documentElement.scrollTop;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${topPosition}px`;
          }
        } else {
          const scrollY = document.body.style.top;
          document.body.style.position = '';
          document.body.style.top = '';
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // prevent triggering useEffect and loading modal on first mount
    if (!isMounted) {
      setIsMounted(true);
      return;
    }
    // delay "display: none" on backdrop when fading out or switch to display: flex right away if fading in
    const backdropTime = isVisible ? 0 : 400;
    setTimeout(() => {
      setIsBackdropVisible(!isBackdropVisible);
    }, backdropTime);

    // delay of modal animation so it doesnt snap right in when appearing
    const modalTime = isVisible ? 100 : 0;
    setTimeout(() => {
      setIsBackdropOpacity(!isBackdropOpacity);
      setIsModalVisible(!isBackdropVisible);
    }, modalTime);

    // eslint-disable-next-line
  }, [isVisible]);

  return (
    <ModalWrapper
      isBackdropVisible={isBackdropVisible}
      isVisible={isModalVisible}
      isBackdropOpacity={isBackdropOpacity}
      modalSize={modalSize}
    >
      <ModalContainer {...props}>
        <div>
          {isClosableModal && (
            <Icon
              ico="close"
              width="14px"
              padding="20px"
              inlineBlock
              onClick={handleClose}
            />
          )}
        </div>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
