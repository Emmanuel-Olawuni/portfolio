'use client'

import { createContext, useState } from "react";
export const MenuContext = createContext({
  Open: false,
  setOpen: () => {},
});

export const MenuProvider = ({ children }) => {
  const [Open, setOpen] = useState(false);
  const value = {
    Open,
    setOpen,
  };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
