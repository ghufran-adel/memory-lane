import "./ImageSlider.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function ImageSlider({ images, title }) {
  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];

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
