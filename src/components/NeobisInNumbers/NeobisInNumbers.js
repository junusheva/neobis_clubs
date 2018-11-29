import React from 'react';
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import NumberItem from "./NumberItem/NumberItem";
import './NeobisInNumbers.css';

const NeobisInNumbers = props => {
    console.log(props.numbers);
    const numbers = props.numbers ? props.numbers : null;

    return (
        <div className="NeobisInNumbers" id={'NeobisInNumbers'}>
            <SectionTitle title='Neobis в цифрах'/>
            <div className="numbersContainer">

                {/*<div className='two-col'>*/}
                    {/*<NumberItem*/}
                        {/*number={numbers ? numbers.members : 0}*/}
                        {/*text='Человек в команде'*/}
                    {/*/>*/}

                    {/*<NumberItem*/}
                        {/*number={numbers ? numbers.years_active : 0}*/}
                        {/*text='Года на рынке'*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<div className='two-col'>*/}
                    {/*<NumberItem*/}
                        {/*number={numbers ? numbers.students : 0}*/}
                        {/*text='Студентов обучено'*/}
                    {/*/>*/}


                    {/*<NumberItem*/}
                        {/*number={numbers ? numbers.projects : 0}*/}
                        {/*text='Реализованных проектов'*/}
                    {/*/>*/}
                {/*</div>*/}

                {/*temporary hard code data*/}
                <div className='two-col'>
                    <NumberItem
                        number={38}
                        text='Человек в команде'
                    />

                    <NumberItem
                        number={3}
                        text='Года на рынке'
                    />
                </div>
                <div className='two-col'>
                    <NumberItem
                        number={87}
                        text='Студентов обучено'
                    />


                    <NumberItem
                        number={15}
                        text='Реализованных проектов'
                    />
                </div>
            </div>
        </div>
    );
}

export default NeobisInNumbers;