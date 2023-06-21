import axios from 'axios';

axios.get('https://openai-db.vercel.app/api/chatLog')
    .then(res => {
        const logs = res.data.map(log => {
            const { role, content } = log;
            return { role, content };
        })
        return logs;
    })
    .catch(err => console.log(err));