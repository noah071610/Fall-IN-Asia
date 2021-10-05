import React, { useEffect, useState } from "react";
import { BLUE_COLOR, FALL_IN_ASIA_LOGO } from "config";
import Link from "next/link";
import { useRouter } from "next/router";
import { FLEX_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";
import Image from "next/image";
import styled from "@emotion/styled";

const HeaderLeftWrapper = styled.ul`
  ${FLEX_STYLE("flex-start", "center")};
  @media (max-width: ${MD_SIZE}) {
    ${tw`hidden`}
  }
`;

const leftHeaderLists = [
  { name: "모멘트", path: "/" },
  { name: "연대기", path: "/story" },
  { name: "관광소식", path: "/news" },
];

const HeaderLeft = () => {
  const { asPath } = useRouter();
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    const pathChecker = asPath?.split("/")[1];
    switch (pathChecker) {
      case "":
        setActivePath("/");
        break;
      case "country":
        setActivePath("/");
        break;
      case "story":
        setActivePath("/story");
        break;
      case "news":
        setActivePath("/news");
        break;
      case "me":
        setActivePath("");
        break;
      default:
        return;
    }
  }, [asPath]);
  return (
    <HeaderLeftWrapper>
      <Link href="/">
        <a className="header-logo">
          <Image width="160" height="32" src={FALL_IN_ASIA_LOGO} alt="fall-in-asia-header-logo" />
        </a>
      </Link>
      {leftHeaderLists.map((v, i) => {
        return (
          <li key={i} className="header-list">
            <Link href={v.path}>
              <a
                style={activePath === v.path ? { color: BLUE_COLOR } : {}}
                className="header-list-anchor"
              >
                {v.name}
              </a>
            </Link>
          </li>
        );
      })}
    </HeaderLeftWrapper>
  );
};

export default HeaderLeft;
