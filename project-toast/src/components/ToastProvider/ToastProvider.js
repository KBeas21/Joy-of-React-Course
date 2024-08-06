import React, { useState } from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastStack, setToastStack] = useState([]);

  const addToasts = (variant, message) => {
    setToastStack([...toastStack, {
      id: crypto.randomUUID(), // I tried using the array length here but since it change had problems with multi delete
      variant: variant,
      content: message
    }]);
  }

  const removeToasts = (id) => {
    const newToasts = toastStack.filter((toast) => {
      return toast.id !== id;
    });

    setToastStack(newToasts);
  }

  const removeAllToasts = () => {
    setToastStack([]);
  }

  return (
    <ToastContext.Provider value={{toastStack: toastStack, addToasts, removeToasts, removeAllToasts}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
