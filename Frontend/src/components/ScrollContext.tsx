import React, { createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollToForm, setScrollToForm] = useState(false);

  return (
    <ScrollContext.Provider value={{ scrollToForm, setScrollToForm }}>
      {children}
    </ScrollContext.Provider>
  );
};
