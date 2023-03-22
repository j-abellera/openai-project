import ImageForm from '../ImageForm';

const ImageGenerator = (props) => {
    const { input, setInput, request, setRequest, imgResponse, setImgResponse } = props;

    return (
        <div className='App'>
          <ImageForm input={input} setInput={setInput} setRequest={setRequest} setImgResponse={setImgResponse} />
          <p className='asked'>{request ? `You requested: ${request}` : null}</p>
          {imgResponse ? <img className='ai-Image' alt='ai-generated' src={imgResponse} /> : null}
        </div>
      );
}

export default ImageGenerator;