import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../Context/AppContext'
import toast from 'react-hot-toast'

const Login = () => {
  const { backendURL, setToken, token, navigate } = useContext(AppContext)
  const [isSignInForm, setIsSignInForm] = useState(true)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  const onSubmitHandler = async (e) => {
      e.preventDefault();
    try {
      if (isSignInForm) {

        const { data } = await axios.post(backendURL + '/api/user/login', { email, password });
        if (data.success) {
          setToken(data.token);
          setEmail('');
          setName('');
          setPassword('');
          toast.success('Successfully logged in!');
        }
        else{
          toast.error(data.message)
        }
      }
      else{
        
        const { data } = await axios.post(backendURL + '/api/user/registerUser', { name,email, password });
        if (data.success) {
          setToken(data.token);
          setEmail('');
          setName('');
          setPassword('');
          toast.success('User Created Successfully!');
        }
        else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

    useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <div className='min-h-[80vh] w-full flex justify-center items-center px-4 py-3'>
      <div className='min-w-[50%] lg:min-w-[25%] min-h-[400px] bg-white  max-sm:min-w-[100%] shadow-2xl p-3 pt-10  '>
        <h1 className='text-4xl font-bold text-center mb-2'><span className='text-[#23488a]'>User </span> {isSignInForm ? "Login" : "Sign Up"}</h1>
        <p className='text-md text-gray-500 text-center'>{isSignInForm ? "Enter" : "Create"} your credentials to {isSignInForm ? "Login" : "Sign Up"} !</p>
        <form onSubmit={onSubmitHandler}>
          {!isSignInForm ?
            <div className=' mt-7 '>
              <label htmlFor="fullname" className='mb-2 px-3 text-gray-600'>Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='your full name' id='fullname' className='w-full px-3 py-3 bg-transparent border-b outline-none border-gray-300 mb-3' />
            </div> : ''}

          <div className={`${isSignInForm ? 'mt-7' : 'mt-2'}`}>
            <label htmlFor="email" className='mb-2 px-3 text-gray-600'>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='your email' id='email' className='w-full px-3 py-3 bg-transparent border-b outline-none border-gray-300 mb-3' />
          </div>
          <div className=' mt-2 '>
            <label htmlFor="password" className='mb-2 px-3 text-gray-600'>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='your password' id='password' className='w-full px-3 py-3 bg-transparent border-b outline-none border-gray-300 mb-3' />
          </div>
          <input type="submit" value="Login" className='w-full px-3 mt-2 py-3 bg-[#23488a] text-white mb-3 rounded-lg cursor-pointer hover:scale-101 duration-700 transition-all' />
        </form>
        <p className='mt-2 text-gray-500'>{isSignInForm ? "New " : "Already "} here? <a onClick={() => { setIsSignInForm(!isSignInForm) }} className='text-[#23488a] cursor-pointer font-bold text-lg hover:underline'>Click Here.</a></p>
      </div>
    </div>
  )
}

export default Login
