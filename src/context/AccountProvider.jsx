import { createContext, useState } from 'react';

export const AuthContext = createContext(null);




const AccountProvider = ( { children } ) => {

   const [account, setAccount] = useState();

    return (
        <AuthContext.Provider value={{ account, setAccount }}>
           {children}
        </AuthContext.Provider>
            
    
    );
};

export default AccountProvider;