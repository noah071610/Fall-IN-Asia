import { FC } from "react";
import { CommunityMenuWrapper, MenuTail } from "./styles";
import { Divider } from "antd";
import Link from "next/link";

interface IProps {}

const CommunityMenu: FC<IProps> = () => {
  return (
    <CommunityMenuWrapper>
      <MenuTail />
      <li>
        <Link href="/club">
          <a>ファンクラブ</a>
        </Link>
      </li>
      <li>
        <Link href="/vote">
          <a>グループ人気投票</a>
        </Link>
      </li>
      <li>
        <Link href="/news">
          <a>KPOPニュース</a>
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>ギャラリー</a>
        </Link>
      </li>
    </CommunityMenuWrapper>
  );
};

export default CommunityMenu;
