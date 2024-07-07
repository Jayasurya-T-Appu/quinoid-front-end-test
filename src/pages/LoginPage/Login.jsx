import React, { useEffect, useState } from 'react'
import './login_style.css'
import clinical_logo from "../../assets/images/clinical_logo.png"
import Button from '../../components/ButtonComponent/Button'
import { useNavigate  } from 'react-router-dom';
import {useAuth} from '../../Utils/AuthContext'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const {login}  = useAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        localStorage.setItem('timerSeconds', 300)
    },[])

    const handleLogin = (e) =>{
        e.preventDefault();
        if(!email || !password || !selectedCategory){
            setError("Please Fill out all fields")
            return
        }
        const storedUser = JSON.parse(localStorage.getItem(email));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setError('');
            login()
            navigate(`/test/${selectedCategory}`)
          } else {
            setError('Invalid email or password.');
          }
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className='signin-page'>
            <div className="signin-page__left_container">
                <div className='signin-page__overlay'></div>
                <img className='clinical_logo' src={clinical_logo} alt="clinical scholar logo" />
            </div>
            <div className="signin-page__right_container">
                <div className='signin-page__form_container'>
                    <h1 className='signin-page__title'>User Sign in</h1>
                    

                    <div className="signin-page__input_group">
                        <label htmlFor="email">Your Email</label>
                        <input id='email' type="text"
                            placeholder='Enter you Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="signin-page__input_group">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password"
                            placeholder='Enter you password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="signin-page__input_group">
                        <label htmlFor="category">Exam Category</label>
                        <select id="category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}>
                            <option value="" disabled defaultValue="">
                                --Select your exam category--
                            </option>
                            <option value="sports">Sports</option>
                            <option value="arts">Arts</option>
                            <option value="history">History</option>
                            <option value="physics">Physics</option>
                        </select>
                    </div>
                    <div className='signin-page__button_wrapper'>
                        {error && <p style={{color:"red"}}>{error}</p>}

                        <Button clickFunction = {handleLogin} text={"SIGN IN"} border={true}/>
                        <p>Don't have an Account? <a href="/signup">Sign up</a> </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login