import CreateLogo from '../../assets/images/New Account Icon.png'
import google from '../../assets/icons/Google.svg'
import style from './SignUp.module.css'

function SignUp() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <form className={style.card}  >
                    <div className="container ">
                        <div className={style["newAcc-icon"]}>
                            <img src={CreateLogo} alt="New Account Logo" />
                        </div>
                        <div className={style["form-head"]}>
                            <h3>Create Account</h3>
                            <p>Join Kitchen Service today</p>
                        </div>
                        <div className={style["form-inputs"]}>
                            <div className="mb-3">
                                <label htmlFor="Full Name">Full Name</label>
                                <input type="text" className='form-control' placeholder='Enter Full Name' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email Address">Email Address</label>
                                <input type="email" className='form-control' placeholder='john@example.com' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className='form-control' placeholder='••••••••' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Confirm Password">Confirm Password</label>
                                <input type="password" className='form-control' placeholder='••••••••' />
                            </div>
                            <button> Create Account</button>
                        </div>
                        <div className={style.divider} >
                            <span>Or continue with</span>
                        </div>
                        <div className={style["social-btns"]}>
                            <button> <img src={google} />Google</button>
                            <button>SSO</button>
                        </div>
                        <div className={style.footer}>
                            <p>Already have an account? <span>Log in</span></p>
                        </div>
                    </div>
                </form>
            </div>
            <footer>
                <div className="container text-center">
                    <div className="footer-links">
                        <ul className="d-flex justify-content-center gap-3 list-unstyled mb-2">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Accessibility</li>
                            <li>Contact Support</li>
                        </ul>
                    </div>
                    <div className="mb-0 text-muted">
                        <p>© 2024 Kinetic Service. Precision POS Solutions.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default SignUp