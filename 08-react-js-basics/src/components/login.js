import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { theme } from './theme';
import { getFbUser } from "../store/selectors/fb-user-selectors";
import { useSelector } from 'react-redux';

export const Login = (props) => {
    const { email, password } = useSelector(getFbUser);

    return (
        <div className="register">
            <h2>Вход/Регистрация</h2>
            <p>Страница регистрации. Тут пока что пусто.</p>
            <form>
                <TextField required className="outlined-required" label="Email" type="email" value={email} placeholder="address@domain.com" variant="outlined" autoFocus autoComplete={email} name="email" onChange={props.handleEmailChange} />
                <TextField required className="outlined-required" label="Password" type="password" value={password} placeholder="******" variant="outlined" autoComplete={password} name="password" onChange={props.handlePasswordChange} />
                <Button type="submit" variant="outlined" onClick={props.handleLogIn} style={{ backgroundColor: theme.palette.secondary.main }} >Log In</Button>
                <Button type="submit" variant="outlined" onClick={props.handleRegister} style={{ backgroundColor: theme.palette.secondary.main }} >Register</Button>
            </form>
            {props.error ? (
                <div>
                    <button className="register__error-button" onClick={props.dismissError}>* {props.error} Click to dismiss.</button>
                </div>
            ) : null}
        </div>
    );
};