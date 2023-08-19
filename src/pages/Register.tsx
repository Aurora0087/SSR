import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../css/log.css";

interface FormData {
    'name': string;
    'mail-id': string;
    'password': string;
    'password-conf': string;
}

function Register() {
    useEffect(() => {
        const data = window.location.search;
        const params = new URLSearchParams(data);
        const email = params.get("email-id");

        const givenMail = document.getElementById("mail-id") as HTMLInputElement;
        if (givenMail && email) {
            givenMail.value = email;
        }
    }, []);

    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const formDataObject: FormData = {
            'name': formData.get('name') as string,
            'mail-id': formData.get('mail-id') as string,
            'password': formData.get('password') as string,
            'password-conf': formData.get('password-conf') as string,
        }
        console.log(formDataObject)

        if (formDataObject.password !== formDataObject['password-conf']) {
            setPasswordMatch(false);
            return;
        }
    };

    return (
        <>
            <div className="container">
                <div className="log">
                    <form onSubmit={handleSubmit}>
                        <div className="nam">
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="arpan gandu"
                                required
                            />
                        </div>
                        <div className="mail-id">
                            <label htmlFor="mail-id">Email Id: </label>
                            <input
                                type="email"
                                name="mail-id"
                                id="mail-id"
                                placeholder="gandu@idk.com"
                                required
                            />
                        </div>
                        <div className="pas">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        <div className="pas-conf">
                            <label htmlFor="password-conf">Confirm Password: </label>
                            <input
                                type="password"
                                name="password-conf"
                                id="password-conf"
                                required
                            />
                        </div>
                        {!passwordMatch && <p className="warning">Passwords do not match.</p>}
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                    <div>
                        <span>Registered already?</span>
                        <Link to={"/login"}>Log in</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
