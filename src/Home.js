import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import {Apps} from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import Search from './Search'

function Home() {
    return (
        <div  className='home'>
            <div className="home_header">
                <div className="home_headerLeft">
                 <Link to='/about'>About</Link>
                 <Link to='/store'>Store</Link>

                </div>
                <div className="home_headerRight">
                <Link to='/email'>Email</Link>
                <Link to='/image'>Image</Link>
                 <Apps/>
                 <Avatar/>
                </div>

            </div>
            <div className="home_body">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png' />
               <div className="home_inputContainer">
                   <Search />
               </div>
            </div>
        </div>
    )
}

export default Home
