import React,{useState,useEffect,useContext} from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import axios from 'axios';

//components
import Navbar from './Navbar';

//context
import { AuthContext } from '../context/AucthContextProvider';

//CSS
import styles from './Chats.module.css';

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();

    useEffect(()=>{
        if(!user){
            history.push("/");
            return;
        }
        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                "project-id": "d3dfa24f-efa7-452a-9c01-5b9037449584",
                "user-name":user.email,
                "user-secret":user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formData = new FormData();
            formData.append("email",user.email);
            formData.append("username",user.email);
            formData.append("secret",user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formData.append("avatar",avatar,avatar.name)
                    axios.post("https://api.chatengine.io/users/",formData,{
                        headers:{
                            "private-key": "fcfbb17f-8178-43e7-9fc8-d361af58bece"
                        }
                    })
                    .then(()=>setLoading(false))
                    .catch(error=>console.log(error))
                })
        })
    },[user,history])

    const getFile = async (url)=>{
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data],"userPhoto.jpg",{type: "image/jpeg"})

    }

    const logoutHandler = async ()=>{
       await auth.signOut();
       history.push("/");
    }

    if (!user || loading) return "Loading..."

    return (
        <div className={styles.container}>
           <Navbar logoutHandler={logoutHandler}/> 

           <ChatEngine
               height = "calc(100vh - 50px)"
               projectID = "d3dfa24f-efa7-452a-9c01-5b9037449584"
               userName={user.email}
               userSecret={user.uid}
           />
        </div>
    );
};

export default Chats;