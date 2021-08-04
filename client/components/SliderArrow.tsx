import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <a className="slick-right-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </a>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <a className="slick-left-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </a>
  );
};
