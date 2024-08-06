import React, { useContext } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};
const STYLES_BY_VARIANT = {
  notice: styles.notice,
  warning: styles.warning,
  success: styles.success,
  error: styles.error,
};

function Toast({ id, variantType, content }) {
  const VarianIcon = ICONS_BY_VARIANT[variantType];
  const varianStyle = STYLES_BY_VARIANT[variantType];
  const { removeToasts } = useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${varianStyle}`}>
      <div className={styles.iconContainer}>
        {/* <Info size={24} /> */}
        <VarianIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {`${variantType} - `}
        </VisuallyHidden>
        {content}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X
          size={24}
          onClick={() => {
            removeToasts(id);
          }}
        />
      </button>
    </div>
  );
}

export default Toast;
