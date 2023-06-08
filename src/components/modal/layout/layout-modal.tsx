import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { LayoutModalProps } from '../layout-modal-types';
import animationStyles from './animation.module.css';
import style from './styles.module.css';

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

const LayoutModal: React.FC<LayoutModalProps> = ({
  opened,
  onClose,
  children,
}) => {
  const [animationIn, setAnimationIn] = useState(false);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);
  return (
    <div className={style.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div
          ref={overlayRef}
          className={style.overlay}
          onClick={onClose}
          aria-hidden="true"
        />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={style.content}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default LayoutModal;
