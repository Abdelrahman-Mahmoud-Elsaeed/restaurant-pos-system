/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false);
  const [ovarlaySidebarState, setOvarlaySidebarState] = useState(false);

  // ✅ ADD FILTER STATE
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <UIContext.Provider
      value={{
        sidebarState,
        setSidebarState,
        ovarlaySidebarState,
        setOvarlaySidebarState,
        activeFilter,
        setActiveFilter,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);