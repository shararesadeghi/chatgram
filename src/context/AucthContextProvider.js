import React,{useState,useEffect,createContext} from 'react';
import {useHistory} from 'react-router-dom';
import { auth } from '../firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(
            user =>{
            setLoading(false);
            setUser(true);
            if(user) history.push("/chats");
            })

    },[history,user])
    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;