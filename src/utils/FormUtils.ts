import { useState } from "react";


export function LoginUtils () {

    const [loginData, setLoginData] = useState({
        user: "",
        password: "",
    });

    const [loginErrors, setLoginErrors] = useState({
        user: "",
        password: "",
    });



    const validateLogin = () => {
        const { user, password } = loginData;
        const errors = {
            user: user.length < 5 ? "Usuário Precisa Ter mais que 5 carácteres" : "",
            password: password.length < 8 ? "Senha Precisa ter mais que 8 carácteres" : "",
        };
        setLoginErrors(errors);
        return !Object.values(errors).some(error => error !== "");
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    return {
        loginData,
        loginErrors,
        validateLogin,
        handleChange                 
    }
}

    interface RegisterData {
        name: string,
        surName: string,
        user: string,
        email: string,
        password: string,        
    }

    interface RegisterErrors {
        name: string,
        surName: string,
        user: string,
        email: string,
        password: string,        
    }

export function RegisterUtils () {

    const [registerData, setRegisterData] = useState<RegisterData>({
        name: "",
        surName: "",
        user: "",
        email: "",
        password: "",        
    });

    const [registerErrors, setRegisterErrors] = useState<RegisterErrors>({
        name: "",
        surName: "",
        user: "",
        email: "",
        password: ""        
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

     const validate = () => {
        const { name, surName, user, email, password } = registerData;
        const errors = {
            name: name.length < 5 ? "Nome Precisa ter mais que 5 Carácteres" : "",
            surName: surName.length < 5 ? "Sobre Nome Precisa ter mais que 5 Carácteres" : "",
            user: user.length < 5 ? "Usuário precisa ter mais que 5 Carácteres" : "",
            email: !validateEmail(email) ? "Formato de Email Invalido" : "",
            password: password.length < 8 ? "Senha precisa ter mais que 5 Carácteres" : "",            
        };
        setRegisterErrors(errors);
        return !Object.values(errors).some(error => error !== "");
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setRegisterData(prevData => ({
            ...prevData,
            [name]: value,
            })
        );        
    }

    return {
        registerData,
        registerErrors,
        validate,
        handleChange        
    }
}
