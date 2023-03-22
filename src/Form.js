import React from 'react';
import axios from 'axios';

const Form = (props) => {
    const { input, setInput, setResponse, setAsked, chatLog, setChatLog } = props;
    const handleChange = (e) => {
        const typed = e.target.value;
        setInput(typed);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedChatLog = [...chatLog, {"role": "user", "content": input}];
        setChatLog(updatedChatLog);
        const response = await aiRequest(updatedChatLog);
        setResponse(response);
        setAsked(input);
        setInput('');
    }

    const aiRequest = async (chatLog) => {
        try {
            console.log(chatLog)
            const response = await axios({
                url: 'https://api.openai.com/v1/chat/completions',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    model: 'gpt-3.5-turbo',
                    messages: chatLog,
                    temperature: 0,
                    max_tokens: 1000
                }
            });
            setChatLog( prevChatLog => [...prevChatLog, {"role": "assistant", "content": response.data.choices[0].message.content}]);
            return response.data.choices[0].message.content;
        } catch (error) {
            console.error(error);
        }
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