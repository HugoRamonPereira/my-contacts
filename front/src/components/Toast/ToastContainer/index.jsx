import { useEffect } from 'react';
import ToastMessage from '../ToastMessage';
import * as Styled from './styles';
import { toastEventManager } from '../../../utils/toast';
import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {
    items: messages,
    setItems: setMessages,
    pendingRemovalItemsIds,
    handleRemoveItem,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Styled.Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={pendingRemovalItemsIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Styled.Container>
  );
}
