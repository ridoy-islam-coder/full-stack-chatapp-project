import { createContext, useState } from 'react';

export const AuthContext = createContext(null);




const AccountProvider = ( { children } ) => {

   const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    return (
        <AuthContext.Provider value={{ account, setAccount,person,setPerson, newMessageFlag, setNewMessageFlag }}>
           {children}
        </AuthContext.Provider>
            
    
    );
};

export default AccountProvider;