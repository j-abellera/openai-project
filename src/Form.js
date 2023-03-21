import React from 'react';
import { aiRequest } from './api';

const Form = (props) => {
    const { input, setInput, setResponse, setAsked, chatLog, setChatLog } = props;
    const handleChange = (e) => {
        const typed = e.target.value;
        setInput(typed);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await aiRequest(input);
        setResponse(response);
        setAsked(input);
        setChatLog(...chatLog, input);
        setInput('');
    }

    return (
        <>
            {/* <h1>OpenAI Project</h1> */}
            <h2>Ask Anything Using GPT3.5</h2>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor='input'>Ask Anything Here</label><br/> */}
                <textarea
                    rows='10'
                    cols='100'
                    id='input'
                    placeholder='Type Here'
                    value={input}
                    onChange={handleChange}
                /><br/>
                <input className='submit' type='submit' value='Submit' />
            </form>
        </>
    )
}

export default Form;