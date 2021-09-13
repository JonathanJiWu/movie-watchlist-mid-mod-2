import React from 'react'
import movieLogo from './movie.png'

const Logo = () => {
    return (
        <div className='logo'>
            <img href="#default" className='logo' src={movieLogo} alt="" height='40vh'/>
        </div>
    )
}

export default Logo
