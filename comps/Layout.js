import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ( props ) => {
    return (
        <div className='content'>
            <NavBar />
            { props.children }
            <Footer />
        </div>
    )
}

export default Layout
