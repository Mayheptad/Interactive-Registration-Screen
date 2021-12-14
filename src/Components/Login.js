
import Inputs from './Inputs';

function Login({handleChange}){
  return (
    <form className="form" onSubmit={handleChange} >
    <Inputs handleChange={handleChange} name='fName' type='text' placeholder='First Name'/>
    <Inputs handleChange={handleChange} name="lName" type="text" placeholder="Last Name"/>
    <Inputs handleChange={handleChange} name='email' type="email" placeholder="Email"/>
      <button type="submit">Submit</button>
    </form>
  )
}
export default Login;
