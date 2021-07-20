import React, { FC, useState } from "react";
import { MainAsideMenuWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBell,
  faGlobe,
  faHiking,
  faHotel,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

interface IProps {}

const MainAsideMenu: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainAsideMenuWrapper>
      <div className="country">
        <div className="world-img">
          <img src="https://img.icons8.com/office/80/000000/globe-earth.png" />
        </div>
        <h2>전세계</h2>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon className="icon" icon={faHiking} />
          놀거리
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faBell} />
          사기경보
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faUtensils} />
          음식
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faHotel} />
          숙박
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faGlobe} />
          국가선택
        </li>
      </ul>
    </MainAsideMenuWrapper>
  );
};

export default MainAsideMenu;
