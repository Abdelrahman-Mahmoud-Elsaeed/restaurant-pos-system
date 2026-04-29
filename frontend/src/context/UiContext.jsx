/* eslint-disable react-refresh/only-export-components */
import { createContext, useState,useContext } from 'react';

const UIContext   = createContext(null);

export const UIProvider  = ({ children }) => {
  const [sidebarState,setSidebarState] = useState(false);
  const [ovarlaySidebarState,setOvarlaySidebarState] = useState(false);
  return (
    <UIContext  value={{sidebarState,setSidebarState,ovarlaySidebarState,setOvarlaySidebarState}}>
      {children}
    </UIContext>
  )
}


export const useUI = () => useContext(UIContext);
