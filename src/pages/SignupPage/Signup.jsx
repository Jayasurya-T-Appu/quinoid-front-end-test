import React, { useState } from 'react'
import "./signup_style.css"
import clinical_logo from "../../assets/images/clinical_logo.png"
import Button from '../../components/ButtonComponent/Button'
import { useNavigate  } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSignup = () => {
        if (!email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
          }
          if (!validateEmail(email)) {
            setError('Invalid email format.');
            return;
          }
          if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
          }
          setError('');
          localStorage.setItem(email, JSON.stringify({ email, password }));
          navigate(`/`)
    }

    return (
        <div className='signup-page'>
            <div className="signup-page__left_container">
                <div className='signup-page__overlay'></div>
                <img className='clinical_logo' src={clinical_logo} alt="clinical scholar logo" />
            </div>
            <div className="signup-page__right_container">
                <div className='signup-page__form_container'>
                    <h1 className='signup-page__title'>User Sign up</h1>

                    <div className="signup-page__input_group">
                        <label htmlFor="email">Your Email</label>
                        <input id='email' 
                        type="text" 
                        placeholder='Enter you Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="signup-page__input_group">
                        <label htmlFor="password">Password</label>
                        <input id='password' 
                        type="password" 
                        placeholder='Enter you password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="signup-page__input_group">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input id='confirm_password' 
                        type="password" 
                        placeholder='Confirm Password' 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <div className='signup-page__button_wrapper'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button clickFunction={handleSignup} text={"SIGN UP"} border={true} />
                        <p>Already have an Account? <a href="/">Sign in</a> </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup