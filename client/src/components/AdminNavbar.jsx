import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid">
                <Link to='/admin' className="navbar-brand" href="#">Admin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" >Home</Link>

                    </div>
                    <div className="dropdown ms-auto">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Admin
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to='/admin' className="dropdown-item">Profile</Link></li>
                            <li><button className="dropdown-item"><i className='bi bi-box-arrow-right'></i>Logout</button></li>
                            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar