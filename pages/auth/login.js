import MainLayout from 'components/layouts/main'
import { useState } from 'react';

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handlerInputOnChange = (e) => {
        const { target: { name, value } } = e;
        setState({
            ...state,
            [name]: value
        });
    }

    const { email, password } = state;

    return (
        <MainLayout>
            <form action="" method="POST">
                <div>
                    <lable>Email</lable><br />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handlerInputOnChange}
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <lable>Password</lable><br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlerInputOnChange}
                        placeholder="Enter password" />
                </div>

                <button type="submit">Login</button>
            </form>
        </MainLayout>
    )
}
export default Login;