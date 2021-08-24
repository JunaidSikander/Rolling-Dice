import React from 'react'

const Die = ({face, rolling}) => {
    return (
        <div className='Die-container'>
            <i className={`fa fa-dice-${face} Die ${rolling ? 'shaking' : ''}`}></i>
        </div>
    )
};

export default Die;
