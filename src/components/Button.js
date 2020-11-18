import React from 'react'

const buttonStyle = {
    height: 100,
    width: 400,
    backgroundColor: 'blue',
    color: 'white',
    marginLeft: 40,
    fontSize: 50

}

function Button(props) {
    return (
        <div>

            <button type='button' style = {buttonStyle} onClick ={props.fn}> {props.titleButton}</button>
            
        </div>
    )
}

export default Button
