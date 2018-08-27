import React from 'react';
import './AlumniSection.css';
import OwlCarousel from 'react-owl-carousel';

const AlumniSection = props => {
    const alumnus = props.alumnus ? props.alumnus : [];
    console.log(alumnus);
    const items = alumnus.map(alumni => (
        <div key={alumni.name} className={'test'}><h4>{alumni.name}</h4></div>
    ));

    const options = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        }
    };
    return (
        <div className="AlumniSection">
            {/*<OwlCarousel*/}
                {/*loop*/}
                {/*className="item"*/}
                {/*dotClass*/}
                {/*{...options}*/}
            {/*>*/}
                {/*/!*{items}*!/*/}
                {/*<div>*/}
                    {/*<div className={'test'}><h4>some item </h4></div>*/}

                {/*</div>*/}
                {/*<div className={'test'}><h4>some item </h4></div>*/}
                {/*<div className={'test'}><h4>some item </h4></div>*/}
                {/*<div className={'test'}><h4>some item </h4></div>*/}

            {/*</OwlCarousel>*/}


            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
            >
                <div className="item"><h4>1</h4></div>
                <div className="item"><h4>2</h4></div>
                <div className="item"><h4>3</h4></div>
                <div className="item"><h4>4</h4></div>
                <div className="item"><h4>5</h4></div>
                <div className="item"><h4>6</h4></div>
                <div className="item"><h4>7</h4></div>
                <div className="item"><h4>8</h4></div>
                <div className="item"><h4>9</h4></div>
                <div className="item"><h4>10</h4></div>
                <div className="item"><h4>11</h4></div>
                <div className="item"><h4>12</h4></div>
            </OwlCarousel>
        </div>
    );
}

export default AlumniSection;