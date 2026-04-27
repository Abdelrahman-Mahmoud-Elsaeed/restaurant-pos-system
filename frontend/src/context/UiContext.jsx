/* eslint-disable react-refresh/only-export-components */
import { createContext, useState,useContext } from 'react';

export const UIContext   = createContext(null);

export const UIProvider  = ({ children }) => {
  const [sidebarState,setSidebarState] = useState(false);
  return (
    <UIContext  value={{sidebarState,setSidebarState}}>
      {children}
    </UIContext>
  )
}


export const useUI = () => useContext(UIContext);
