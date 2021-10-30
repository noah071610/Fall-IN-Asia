import { FC } from "react";
import Link from "next/link";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const LanguageSelectPopUpWrapper = styled.ul`
  ${tw`absolute right-0 bg-white shadow-md rounded-xl overflow-hidden w-auto`}
  top:120%;
  z-index: 80;
  white-space: nowrap;
  li {
    ${tw`w-auto block cursor-pointer hover:bg-gray-100 py-3 px-8 text-sm font-bold`}
    img {
      ${tw`w-6 mr-1`}
    }
    .check-icon {
      ${tw`ml-3`}
    }
  }
`;
const LanguageSelectPopUp: FC = () => {
  const { locale } = useRouter();
  return (
    <LanguageSelectPopUpWrapper>
      <Link href="/" locale="ko">
        <a>
          <li>
            <img
              src="https://img.icons8.com/color/20/000000/south-korea.png"
              className="country-flag-img"
              alt="country-img"
            />
            한국어
            {locale === "ko" && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          </li>
        </a>
      </Link>
      <Link href="/" locale="en">
        <a>
          <li>
            <img
              src="https://img.icons8.com/color/20/000000/usa.png"
              className="country-flag-img"
              alt="country-img"
            />
            English
            {locale === "en" && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          </li>
        </a>
      </Link>
      <Link href="/" locale="jp">
        <a>
          <li>
            <img
              src="https://img.icons8.com/color/20/000000/japan.png"
              className="country-flag-img"
              alt="country-img"
            />
            日本語
            {locale === "jp" && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          </li>
        </a>
      </Link>
    </LanguageSelectPopUpWrapper>
  );
};

export default LanguageSelectPopUp;
