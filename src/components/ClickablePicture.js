import { useState } from 'react';

function ClickablePicture(props) {
  const [Image, setImage] = useState(props.img);

  function changeImage() {
    if (Image === props.img) {
      setImage(props.imgClicked);
    } else {
      setImage(props.img);
    }
  }

  return (
    <div>
      <img src={Image} alt="imag" onClick={changeImage} />
    </div>
  );
}

export default ClickablePicture;
