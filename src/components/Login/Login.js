import React, {useState} from "react";
import './Login.scss';
import AuthFormOverlay from "components/Layout/AuthFormOverlay";
import { Link } from "react-router-dom";


export default function Login() {
    const [formParams, setFormParams] = useState({
        username:'',
        password:'',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const formChange = (e) => {
        const { name,value } = e.target;
        setFormParams({...formParams,
            [name]: value
        });
    }

    return (    
        <AuthFormOverlay >
            <h1 className="mb-5">Login</h1>
            <form onSubmit={handleSubmit} className="auth-form">   

                <fieldset className="mb-5">
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" value={formParams.username} onChange={formChange} />
                    
                </fieldset>   
                
                <fieldset className="mb-5">
                <label>
                    Password:
                </label>
                <input type="password" name="password" value={formParams.password} onChange={formChange}/>
                </fieldset>
             

                <input className="mb-5" type="submit" value="Login"></input>

                <p>Don't have an Account? Create one <Link to="/signup">here</Link> </p>
            </form>
        </AuthFormOverlay>
    );

}