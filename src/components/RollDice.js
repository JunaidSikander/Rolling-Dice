import React, {useState} from 'react'
import Die from "./Die";

const RollDice = ({sides}) => {
    const [die1, setDie1] = useState('one');
    const [die2, setDie2] = useState('one');
    const [rolling, setRolling] = useState(false);

    const rollHandler = () => {
        setRolling(true);
        setDie1(sides[Math.floor(Math.random() * sides.length)]);
        setDie2(sides[Math.floor(Math.random() * sides.length)]);
        setTimeout(() => setRolling(false), [1000]);
    };

    return (
        <div className='RollDice'>
            <div className='Container'>
                <Die face={die1} rolling={rolling}/>
                <Die face={die2} rolling={rolling}/>
            </div>
            <button className="Button" onClick={rollHandler}
                    disabled={rolling}>{rolling ? 'Rolling...' : 'Roll Dice!'}</button>
        </div>
    )
};

export default RollDice;

RollDice.defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
};
