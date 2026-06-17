import { useState, useCallback } from 'react';

export function useAccordion(initialId?: string) {
  const [openId, setOpenId] = useState<string | undefined>(initialId);

  const toggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? undefined : id));
  }, []);

  return { openId, toggle, setOpenId };
}
