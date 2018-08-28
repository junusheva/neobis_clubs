import React from 'react';
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import NumberItem from "./NumberItem/NumberItem";
import AnimatedNumber from 'react-animated-number';
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp, {startAnimation} from 'react-countup'
import './NeobisInNumbers.css';

const NeobisInNumbers = props => {
    console.log(props.numbers);
    const numbers = props.numbers ? props.numbers : null;

    // let value = numbers ? numbers.members : null;
    //
    // const update = () => {
    //     if (value === 0) value = null;
    //     else value = 0;
    // }
    // setInterval(() => startAnimation(this.myCountUp), 5000);
    return (
        <div className="NeobisInNumbers" id={'NeobisInNumbers'}>
            <SectionTitle title='Neobis в цифрах'/>
            <div className="numbersContainer">
                {/*<ScrollAnimation animateIn='fadeIn'>*/}
                    {/*<div>*/}
                        {/*<CountUp className="CountUp" start={0} end={200} duration={3} ref={(countUp) => {*/}
                            {/*this.myCountUp = countUp;*/}
                        {/*}}/>*/}
                        {/*<button className="Button" onClick={(event) => {*/}

                        {/*}}>Count me up!*/}
                        {/*</button>*/}
                    {/*</div>*/}
                    {/*<CountUp className="CountUp"*/}
                             {/*start={0}*/}
                             {/*end={100}*/}
                             {/*duration={3}*/}
                             {/*redraw={true}*/}
                             {/*ref={(countUp) => {*/}
                                 {/*value = countUp;*/}
                             {/*}}/>*/}
                    {/*<AnimatedNumber*/}
                        {/*style={{*/}
                            {/*transition: '0.8s ease-out',*/}
                            {/*transitionProperty:*/}
                                {/*'background-color, color'*/}
                        {/*}}*/}
                        {/*value={value}*/}
                        {/*stepPrecision={0}*/}
                        {/*duration={3000}*/}
                        {/*formatValue={n => (*/}
                            {/*<NumberItem*/}
                                {/*number={n}*/}
                                {/*text='Человек в команде'*/}
                            {/*/>*/}
                        {/*)}*/}
                    {/*/>*/}
                {/*</ScrollAnimation>*/}
                
                <NumberItem
                    number={numbers ? numbers.members : 0}
                    text='Человек в команде'
                />

                <NumberItem
                    number={numbers ? numbers.years_active : 0}
                    text='Года на рынке'
                />


                <NumberItem
                    number={numbers ? numbers.students : 0}
                    text='Студентов обучено'
                />


                <NumberItem
                    number={numbers ? numbers.projects : 0}
                    text='Реализованных проектов'
                />

            </div>
        </div>
    );
}

export default NeobisInNumbers;