import React from 'react'

function Header(props) {

    const HeaderStyle = {

        fontSize: 50,
        color: 'green',
        marginLeft: 50
    }
    return (
        <div>

            <h1 style = {HeaderStyle}>{props.title} : {props.countCakes}</h1>

            
            
        </div>
    )
}

export default Header
