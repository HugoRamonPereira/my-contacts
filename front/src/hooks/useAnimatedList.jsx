import { useCallback, useState } from 'react';

export default function useAnimatedList() {
  const [items, setItems] = useState([]);
  const [pendingRemovalItemsIds, setRemovalPendingItemsIds] = useState([]);

  const handleRemoveItem = useCallback((id) => {
    setRemovalPendingItemsIds(
      (prevState) => [...prevState, id],
    );
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setRemovalPendingItemsIds((prevState) => prevState.filter((itemId) => itemId !== id));
  }, []);

  return {
    items,
    setItems,
    pendingRemovalItemsIds,
    handleRemoveItem,
    handleAnimationEnd,
  };
}
