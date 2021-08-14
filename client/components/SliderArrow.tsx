import styled from "@emotion/styled";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BLUE_COLOR, SM_SIZE } from "config";
import tw from "twin.macro";

const SliderRightArrow = styled.a`
  ${tw`block z-10 top-1/2 right-0 absolute text-4xl text-white p-4 opacity-50 `}
  transform: translateY(-50%);
  transition: 0.3s all;
  &:hover {
    ${tw`text-white opacity-100`}
    transform: translate(10%, -50%);
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`right-0 pr-0`}
  }
`;

const SliderLeftArrow = styled.a`
  ${tw`block z-10 top-1/2 left-0 absolute text-4xl text-white p-4 opacity-50`}
  transform: translateY(-50%);
  transition: 0.3s all;
  &:hover {
    transform: translate(-10%, -50%);
    ${tw`text-white opacity-100`}
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`left-0 pl-0`}
  }
`;

export const NextArrow = (props: any) => {
  const { onClick, slideCount, currentSlide } = props;
  return (
    <>
      {slideCount - 1 !== currentSlide && (
        <SliderRightArrow onClick={onClick}>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </SliderRightArrow>
      )}
    </>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <SliderLeftArrow onClick={onClick}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </SliderLeftArrow>
      )}
    </>
  );
};
