import React, { useContext, useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useKeyDownEvent from '../../hooks/useKeyDownEvent';

function ToastShelf() {
  const { toastStack, removeAllToasts } = useContext(ToastContext);
  useKeyDownEvent('Escape', removeAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastStack.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast id={toast.id} variantType={toast.variant} content={toast.content} />
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
