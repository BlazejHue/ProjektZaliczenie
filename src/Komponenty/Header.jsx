import React from 'react';

function Header() {
    return (
        <div id="main">
            <div className='header-heading'>
                <h3> It's Great Time For A Good Burger</h3>
                <h1><span>BURGER</span> FOR <br/> WEEK </h1>
                <p className='details'> fresh meat and vegetables are all what u want </p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>Order</a>
                </div>
            </div>
        </div>
    )
}
export default Header;