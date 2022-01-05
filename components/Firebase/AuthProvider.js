import React, {createContext, useState} from "react";
import auth from "@react-native-firebase/auth";

export const authContext = createContext("ffdsajfhds");

export const AuthProvider =({children}) => {
    const [user, setUser] = useState(null);
    const login = async (email,pass)=>{
        try{
            await auth().signInWithEmailAndPassword(email,pass).then(userCre => console.log(userCre.user) );

            return true;
        }catch(e){
            console.log(e);
            return false;
        }
        return false;
    }
    const signUp = async (email,pass)=>{
        try{
            await auth().createUserWithEmailAndPassword(email,pass).then(userCre => console.log(userCre.user) );

            return true;
        }catch(e){
            console.log(e);
            return false;
        }
        return false;
    }
    
    return(
        <authContext.Provider  
            value = {{
                user,
                setUser,
                login,
                signUp
                }}
        >
           
           {children}
        </authContext.Provider>
    )
}
/*
register: async (email, pass)=>{
                    try{
                        await auth().createUserWithEmailAndPassword(email,pass);
                    }catch(e){
                        console.log(e);
                    }
                },
                logout: async()=>{
                    try{
                        await auth.signOut();
                    }catch(e){
                        console.log(e);
                    }
                }

*/
