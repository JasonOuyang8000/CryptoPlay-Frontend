import React, {useState} from "react";

import AuthFormOverlay from "components/Layout/AuthFormOverlay";
import { Link } from "react-router-dom";


export default function Signup() {
    const [formParams, setFormParams] = useState({
        username:'',
        email:'',
        password:'',
        balance: 0,
        public: true,
    });


    const createAccount = () => {
        fetch(`${process.env.BACKEND}/user`, {
            method:'POST',
            mode:'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(formParams)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('userToken',data['userToken']);
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createAccount();

    }


    const formChange = (e) => {
        const { name,value } = e.target;
        setFormParams({...formParams,
            [name]: value
        });
    }

    return (    
        <AuthFormOverlay >
            <h1 className="mb-5">Signup</h1>
            <form onSubmit={handleSubmit} className="auth-form">   

                <fieldset className="mb-5">
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" value={formParams.username} onChange={formChange} />
                    
                </fieldset>   

                <fieldset className="mb-5">
                <label>
                    Email:
                </label>
                <input type="text" name="email" value={formParams.email} onChange={formChange}/>
                </fieldset>

                <fieldset className="mb-5">
                <label>
                    Balance:
                </label>
                <input min="0" type="number" name="balance" value={formParams.balance} onChange={formChange}/>
                </fieldset>
                
                <fieldset className="mb-5">
                <label>
                    Password:
                </label>
                <input type="password" name="password" value={formParams.password} onChange={formChange}/>
                </fieldset>


                    

                <input className="mb-5" type="submit" value="Signup"></input>

                <p className="text-center">Got an Account? Login <Link to="/login">here</Link> </p>
            </form>
        </AuthFormOverlay>
    );

}