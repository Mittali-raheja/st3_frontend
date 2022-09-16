import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login }  from "../features/userSlice";
import "./Login.css"
import { useHistory } from "react-router";

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const Tologin = (e) => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
        })
        .catch(error => alert(error));

        history.push("/");
    }

    const Toregister = (e) => {

        if(!name){
            alert("PLS Enter A Username....")
        }

        console.log(name);
        console.log(password);
        console.log(email);

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) =>
            userAuth.user.updateProfile({
                displayName: name
            })
            .then(() => {
                dispatch(login({
                    displayName: userAuth.user.displayName,
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                }))
            })
        )
        .catch((err) => alert(err));

        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="login">
            <div className="login__container">
                <h1>LOGIN PLS !!!</h1>
                <form>
                    <input type="text" placeholder="Name(ONLY TO REGISTER)" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={Tologin}>Hi!</button>

                    <div className="login__btns">
                        <h5 className="login__btn" onClick={Tologin}>
                            LOGIN
                        </h5>

                        <h5 className="register__btn" onClick={Toregister}>
                            REGISTER
                        </h5>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;