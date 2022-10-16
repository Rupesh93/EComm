import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './signup.css'
const Signup=()=>{
    return(
        <>
        <Navbar/>
        <div className="signup-container">
            <div className="signup-img">

            </div>
            <div className="signupform">
            <h1>Signup</h1>
            <form>
                <input type='text' placeholder='Enter Name'/><br/><br/>
                <input type='email' placeholder='Enter Email'/><br/><br/>
                <input type='password' placeholder='Enter Password'/><br/><br/>
                <button>Signup</button>
            </form>

            </div>
        </div>
        <Footer/>

        </>
    )
}


export default Signup;