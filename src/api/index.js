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

export const vercelDBAllLogs = async () => {
    const { data } = await axios.get('https://openai-db.vercel.app/api/chatLog')
    const logs = data.data.map(log => {
        const { role, content } = log;
        return { role, content };
    });
    return logs;
}

export const addChatToLog = async (chat) => {
    const createdLogs = await axios.post('https://openai-db.vercel.app/api/chatLog', chat);
    return createdLogs.data.data;
}

const initData = {role: "system", content: "You are a helpful assistant, your answers should not be too long unless it is necessary to provide more information for the question."};
export const initChatLog = async () => {
    const { data } = await axios.post('https://openai-db.vercel.app/api/chatLog', initData);
    const createdLogs = data.data.map(log => {
        const { role, content } = log;
        return { role, content };
    })
    return createdLogs;
}

export const resetChatLog = async () => {
    const { data } = await axios.delete('https://openai-db.vercel.app/api/chatLog/delete/all');
    return data.message;
}