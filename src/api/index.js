import axios from 'axios';
// import * as dotenv from 'dotenv-webpack'

export const aiRequest = async (input) => {
    try {
        const response = await axios({
            url: 'https://api.openai.com/v1/completions',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            data: {
                model: 'text-davinci-003',
                prompt: input,
                temperature: 0,
                max_tokens: 1000
            }
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.error(error);
    }
}

// export const aiRequest = async (input) => {
//     let answer;
//     axios({
//         url: 'https://api.openai.com/v1/completions',
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//             'Content-Type': 'application/json'
//         },
//         data: {
//             model: 'text-davinci-003',
//             prompt: input,
//             temperature: 0,
//             max_tokens: 1000
//         }
//     }).then(response => {
//         answer = response.data.choices[0].text;
//     }).catch(error => {
//         console.error(error);
//     });
// }

    // axios({
    //     url: 'https://api.openai.com/v1/completions',
    //     method:'POST',
    //     headers: {
    //         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //         'Content-Type': 'application/json'
    //     },
    //     data: {
    //         model: "text-davinci-003",
    //         prompt: input,
    //         temperature: 0,
    //         max_tokens: 100
    //     }
    // })
    // .then(res => {
    //     console.log(res)
    // })
    // .catch(err => {
    //     console.log(err)
    // })