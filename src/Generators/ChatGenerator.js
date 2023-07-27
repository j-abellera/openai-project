import Form from '../Form';

const ChatGenerator = (props) => {
    const { input, setInput, setResponse, setAsked, chatLog, setChatLog, asked, response, initChatLog, resetChatLog, temperature, setTemperature } = props;

    const onReset = async () => {
      setAsked('');
      setResponse('')
      setInput('');
      await resetChatLog();
      const cleanSlate = await initChatLog();
      setChatLog(cleanSlate);
    }

    const setNewTemp = e => {
      const { value } = e.target;
      setTemperature(parseFloat(value));
    }

    return (
        <div className='App'>
          <div className='temp-container'>
            <label htmlFor='temp-range'>Chat Response</label>
            <input name='temp-range' type='range' min={0} max={2} step={0.1} value={temperature} onChange={setNewTemp} />
            {temperature <= .7 ? `${temperature} - Focused` : temperature <= 1.4 ? `${temperature} - Balanced` : `${temperature} - Random`}
          </div>
          <Form input={input} setInput={setInput} setResponse={setResponse} setAsked={setAsked} chatLog={chatLog} setChatLog={setChatLog} temperature={temperature} />
          <p className='asked'>{asked ? `You asked: ${asked}` : null}</p>
          <h4 className='response'>{response ? response : null}</h4>
          {
            chatLog.length > 1
            ? <span className='submit clear' onClick={onReset}>Clear Logs</span>
            : null
          }
        </div>
      );
}

export default ChatGenerator;