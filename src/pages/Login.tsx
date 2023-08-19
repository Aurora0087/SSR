import { Link } from 'react-router-dom'

import '../css/log.css'

function Login() {
    return (
        <>
        <div className="container">
        <div className="log">
            <form action="/home" method="get" className="login_form">
                <div className="mail-id">
                    <label htmlFor="id">Email: </label>
                    <input type="email" name="id" id="id" placeholder="Gandu@idk.com" required />
                </div>
                <div className="pas">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div>
                    <button type="submit">LOG IN</button>
                </div>
            </form>
            <div>
            <span>Don't have account?</span>
            <Link to={"/register"}>Register here</Link>
            </div>
        </div>
    </div>
        </>
    )
}

export default Login