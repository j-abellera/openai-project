import React from 'react';
import axios from 'axios';

const ImageForm = (props) => {
    const { input, setInput, request, setRequest, imgResponse, setImgResponse } = props;

    const handleChange = (e) => {
        const typed = e.target.value;
        setInput(typed);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await imgRequest(input);
        setImgResponse(response);
        setRequest(input);
        setInput('');
    }

    const imgRequest = async () => {
        try {
            const response = await axios({
                url: 'https://api.openai.com/v1/images/generations',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    prompt: input,
                    n: 1,
                    size: '1024x1024'
                }
            });
            console.log(response.data.data[0].url)
            return response.data.data[0].url//returns image
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h2>Generate an Image using DALL·E</h2>
            <form onSubmit={handleSubmit}>
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

export default ImageForm;