import React from 'react';
import axios from 'axios';
import { resetChatLog, vercelDBAllLogs, addChatToLog } from './api/index';
import godPrompt from './data/godMode';

const Form = (props) => {
    const { input, setInput, setResponse, setAsked, chatLog, setChatLog, temperature, godMode, setGodMode, onReset } = props;
    const handleChange = (e) => {
        const typed = e.target.value;
        setInput(typed);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addChatToLog({"role": "user", "content": input});
        const updatedChatLog = [...chatLog, {"role": "user", "content": input}];
        setChatLog(updatedChatLog);
        const response = await aiRequest(updatedChatLog);
        setResponse(response);
        setAsked(input);
        setInput('');
    }

    const setMode = e => {
        if(godMode === false) {
            setGodMode(!godMode);
            setInput(godPrompt);
        } else {
            setGodMode(!godMode);
            onReset();
        }
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
                    model: 'gpt-4-1106-preview',
                    messages: chatLog,
                    temperature: temperature,
                    max_tokens: 1000
                }
            });
            await addChatToLog({"role": "assistant", "content": response.data.choices[0].message.content});
            setChatLog( prevChatLog => [...prevChatLog, {"role": "assistant", "content": response.data.choices[0].message.content}]);
            return response.data.choices[0].message.content;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {/* <h1>OpenAI Project</h1> */}
            <h1>Ask Anything Using GPT 4</h1>
            {/* <label htmlFor='godmode'>God Mode (erases chatLog on when disabled)</label>
            <input name='godmode' type='checkbox' checked={godMode} onChange={setMode}/> */}
            <form id='chatForm' onSubmit={handleSubmit}>
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