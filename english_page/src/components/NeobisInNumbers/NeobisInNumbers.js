import React from 'react';
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import NumberItem from "./NumberItem/NumberItem";

import './NeobisInNumbers.css';

const NeobisInNumbers = props => {
    console.log(props.numbers);
    const numbers = props.numbers ? props.numbers : null;
    return (
        <div className="NeobisInNumbers">
            <SectionTitle title='Neobis в цифрах'/>
            <div className="numbersContainer">
                <NumberItem
                    number={numbers ? numbers.members : null}
                    text='Человек в команде'
                />
                <NumberItem
                    number={numbers ? numbers.years_active : null}
                    text='Года на рынке'
                />
                <NumberItem
                    number={numbers ? numbers.students : null}
                    text='Студентов обучено'
                />
                <NumberItem
                    number={numbers ? numbers.projects + '+' : null}
                    text='Реализованных проектов'
                />
            </div>
        </div>
    );
}

export default NeobisInNumbers;