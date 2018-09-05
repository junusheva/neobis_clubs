import React from 'react';
import './NumberItem.css';
import AnimatedNumber from 'react-animated-number';
import CountUp, {startAnimation} from 'react-countup';

const NumberItem = props => {
    //setInterval(() => startAnimation(this.myCountUp), 5000);
    return (
        <div className="NumberItem">
            {/*<AnimatedNumber component="text" value={props.number}*/}
            {/*style={{*/}
            {/*transition: '0.8s ease-out',*/}
            {/*fontSize: 48,*/}
            {/*transitionProperty:*/}
            {/*'background-color, color, opacity'*/}
            {/*}}*/}
            {/*frameStyle={perc => (*/}
            {/*perc === 100 ? {} : {backgroundColor: '#ffeb3b'}*/}
            {/*)}*/}
            {/*duration={300}*/}
            {/*formatValue={n => prettyBytes(n)}/>*/}
            <p className="NumberItemNumber">
                <CountUp
                    className="CountUp"
                    start={0}
                    end={props.number}
                    duration={5}
                    ref={(countUp) => {
                        this.myCountUp = countUp;
                    }}
                />
            </p>
            <p className="NumberItemText">{props.text}</p>
        </div>
    );
}

export default NumberItem;