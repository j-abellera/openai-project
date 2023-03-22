import Form from '../Form';

const ChatGenerator = (props) => {
    const { input, setInput, setResponse, setAsked, chatLog, setChatLog, asked, response } = props;

    return (
        <div className='App'>
          <Form input={input} setInput={setInput} setResponse={setResponse} setAsked={setAsked} chatLog={chatLog} setChatLog={setChatLog} />
          <p className='asked'>{asked ? `You asked: ${asked}` : null}</p>
          <h4 className='response'>{response ? response : null}</h4>
        </div>
      );
}

export default ChatGenerator;