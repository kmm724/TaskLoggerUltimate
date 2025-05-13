import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types for employee and user session
export type Employee = {
  id: string;
  name: string;
  role: 'Laborer' | 'Supervisor';
  phone?: string;
  archived?: boolean;
};

export type ActiveUser = {
  id: string;
  name: string;
  role: 'GC' | 'Supervisor' | 'Laborer';
};

// App-wide context shape
type AppContextType = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  activeUser: ActiveUser | null;
  setActiveUser: React.Dispatch<React.SetStateAction<ActiveUser | null>>;
};

// Default context values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Context provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [activeUser, setActiveUser] = useState<ActiveUser | null>(null);

  return (
    <AppContext.Provider value={{ employees, setEmployees, activeUser, setActiveUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for accessing context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
