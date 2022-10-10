import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    let [data, setData] = React.useState(1);
  return (
    <UserContext.Provider value={{data, setData}}>
        {children}
    </UserContext.Provider>
  )
}

