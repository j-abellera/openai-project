import ImageForm from '../ImageForm';

const ImageGenerator = (props) => {
    const { input, setInput, request, setRequest, imgResponse, setImgResponse } = props;

    return (
        <div className='App'>
          <ImageForm input={input} setInput={setInput} setRequest={setRequest} setImgResponse={setImgResponse} />
          <p className='asked'>{request ? `You requested: ${request}` : null}</p>
          {imgResponse ? imgResponse.map((img, idx) => <img key={idx} className='ai-Image' alt='ai-generated' src={img.url} />) : null}
        </div>
      );
}

export default ImageGenerator;