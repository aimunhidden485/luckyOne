import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questions'>
            <div className='question'>
                <h3>How does react work?</h3>
                <p>React is basically a javascript library for building user interfaces. The heart of all react applications are it's components. By react, we can build isolated and reusable components which is very flexible for a web developer. Every react application has atleast one component which refers to root component called "App". Every react application is a tree of components </p>
            </div>
            <div className='question'>
                <h3>Difference between props and State?</h3>
                <p>By props we can pass data from one component to another. By state we can store data locally. Props are read only. State is both read and write. In state, we can set a data to a prop. Props can not set data of a state.</p>
            </div>
        </div>
    );
};

export default Question;