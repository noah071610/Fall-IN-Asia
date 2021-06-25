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
        <Link href="/b">
          <a>リアルタイムトーク</a>
        </Link>
      </li>
      <Divider />
      <li>
        <Link href="/a">
          <a>応援メッセージ</a>
        </Link>
      </li>
      <Divider />
      <li>
        <Link href="/c">
          <a>KPOPニュース</a>
        </Link>
      </li>
    </CommunityMenuWrapper>
  );
};

export default CommunityMenu;
