import "./MilestonCard.scss";
import { MdAccessTime } from "react-icons/md";

function MilestoneCard({ title, description, media, date }) {
  // Parse the date string
  const parsedDate = new Date(date);

  // Extract year, month, and day
  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();

  // Format the date as YYYY-MM-DD
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  return (
    <div className="milestone-card">
      <div className="milestone-card__media">
        <img
          className="milestone-card__image"
          src={media[0].media_url}
          alt={title}
        />
      </div>
      <div className="milestone-card__details">
        <div className="milestone-card__date">
          <MdAccessTime className="milestone-card__icon" />
          <time dateTime={formattedDate}>{formattedDate}</time>
        </div>
        <h4 className="milestone-card__title">{title}</h4>

        <p className="milestone-card__description">{description}</p>
      </div>
    </div>
  );
}

export default MilestoneCard;
