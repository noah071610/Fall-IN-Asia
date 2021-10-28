import React, { useEffect, useState } from "react";
import { BLUE_COLOR, FALL_IN_ASIA_LOGO } from "config";
import Link from "next/link";
import { useRouter } from "next/router";
import { FLEX_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const HeaderLeftWrapper = styled.ul`
  ${FLEX_STYLE("flex-start", "center")};
  @media (max-width: ${MD_SIZE}) {
    ${tw`hidden`}
  }
`;

const HeaderLeft = () => {
  const { t } = useTranslation("common");
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

  const leftHeaderLists = [
    { name: t("nav.moment"), path: "/" },
    { name: t("nav.story"), path: "/story" },
    { name: t("nav.news"), path: "/news" },
  ];
  return (
    <HeaderLeftWrapper>
      <Link href="/">
        <a className="header-logo">
          <img src={FALL_IN_ASIA_LOGO} alt="fall-in-asia-header-logo" />
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
