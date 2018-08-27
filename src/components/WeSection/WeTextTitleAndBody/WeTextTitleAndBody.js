import React, {Fragment} from 'react';
import './WeTextTitleAndBody.css';

const WeTextTitleAndBody = props => (
    <Fragment>
        <p
            className="WeTextContainerTitle"
            style={{textAlign: props.align}}
        >{props.title}</p>
        <p
            className="WeTextContainerBody"
            style={{textAlign: props.align}}
        >{props.body}</p>
    </Fragment>
);

export default WeTextTitleAndBody;