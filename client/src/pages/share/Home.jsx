import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Home = () => {
    const [showLogin, setshowLogin] = useState({})
    const toggle = () => setshowLogin(!showLogin)
    return <div className='vh-100 d-flex'>
        <div className='alert alert-primary vh-100 flex-grow-1 d-flex justify-content-center align-align-items-center'>

            {
                showLogin ? <Login toggle={toggle} />
                    : <Register toggle={toggle} />
            }

        </div>
        <img className='img-fluid d-none d-md-block' src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
}

export default Home     