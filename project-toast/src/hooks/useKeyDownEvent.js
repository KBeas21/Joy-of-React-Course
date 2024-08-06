import React from 'react';

function useKeyDownEvent(listenerKey, callback) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === listenerKey) {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }

  }, [listenerKey, callback]);
}

export default useKeyDownEvent;
