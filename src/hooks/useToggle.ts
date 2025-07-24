"use client";

import { useState, useCallback } from 'react';

/**
 * Hook for managing boolean state with toggle functionality
 * Useful for modals, menus, visibility states, etc.
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(prev => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue,
  };
}

export type UseToggleReturn = ReturnType<typeof useToggle>;
