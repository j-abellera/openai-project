import axios from 'axios';
// import * as dotenv from 'dotenv-webpack'

export const aiRequest = async (input) => {
    try {
        const response = await axios({
            url: 'https://api.openai.com/v1/chat/completions',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            data: {
                model: 'gpt-3.5-turbo',
                messages: [
                    {"role": "system", content: "You are a helpful assistant"},
                    {"role": "user", "content": input},
                ],
                temperature: 0,
                max_tokens: 1000
            }
        });
        console.log(response.data.choices)
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
    }
}