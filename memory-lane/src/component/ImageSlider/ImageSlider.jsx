import "./ImageSlider.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function ImageSlider({ images, title }) {


  const properties = {
    prevArrow: (
      <button className="slide__btn">
        <IoIosArrowBack className="slide__icon" />
      </button>
    ),
    nextArrow: (
      <button className="slide__btn">
        <IoIosArrowForward className="slide__icon" />
      </button>
    ),
  };

  return (
    <>
      <Slide {...properties} autoplay={false}>
        {images.map((image) => (
          <div className="slide__effect" key={image.id}>
            <img className="slide__image" src={image.media_url} alt={title} />
          </div>
        ))}
      </Slide>
    </>
  );
}

export default ImageSlider;
