import "./ImageSlider.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function ImageSlider({ media, title }) {
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
        {media.map((image) => (
          <div className="slide__effect" key={image.id}>
            {/* if media is audio */}
            {image.media_type === "audio" && (
              <audio className="slide__image slide__image--audio" controls>
                <source
                  src={`${process.env.REACT_APP_BASE_URL}${image.media_url}`}
                />
              </audio>
            )}
            {/* if media id image */}
            {image.media_type === "image" && (
              <img
                className="slide__image"
                src={`${process.env.REACT_APP_BASE_URL}${image.media_url}`}
                alt={title}
              />
            )}
            {/* if media is video */}
            {image.media_type === "video" && (
              <video className="milestone-card__image" controls>
                <source
                  src={`${process.env.REACT_APP_BASE_URL}${image.media_url}`}
                />
              </video>
            )}
          </div>
        ))}
      </Slide>
    </>
  );
}

export default ImageSlider;
