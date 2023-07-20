import React from 'react';

export function LoginUtils(){

    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");


    const [formSuccess, setFormSuccess] = React.useState(false);
    const [formError, setFormError] = React.useState(false);
    const [showDialog, setShowDialog] = React.useState(false);
    
    const handleUserChange = (e : React.ChangeEvent<HTMLInputElement>): void => {
        setUser(e.target.value)
    };

    const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value)
    };

    const sendUserData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const data = {
            user: user,
            password: password
        }

        if(user === "admin" && password === "admin"){
            setShowDialog(true)
            setFormSuccess(true)
            setFormError(false)
            
        }else{
            setShowDialog(true)
            setFormSuccess(false)
            setFormError(true)
        }

        if ( password === "" ){
            setShowDialog(true)
            setFormSuccess(false)
            setFormError(true)
        }

        console.log(data)

        
    }
    

// Exportar funções
    return{
        user,
        password,
        formSuccess,
        showDialog,
        formError,
        setShowDialog,        
        handleUserChange,
        handlePasswordChange,
        sendUserData
    }
}