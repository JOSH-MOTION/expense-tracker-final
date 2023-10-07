import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address</label>
      <input 
       placeholder="Email"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password</label>
      <input 
      placeholder="Password"
      type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <button className="passbtn"
          type="button"
          onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
         <br />

      <button disabled={isLoading} className="btnsp">Sign up</button>
      <Link to="/login"><button disabled={isLoading} className="btnlg">Log in</button></Link>
      {error && <div className="error">{error}</div>}
    </form>
    
  )
}

export default Signup