import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, LG_SIZE, SM_SIZE } from "config";
import tw from "twin.macro";
import { Divider } from "antd";
import { GithubFilled, InstagramFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import router from "next/router";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import Head from "next/head";
import { useDispatch } from "react-redux";

const AboutPageWrapper = styled.div`
  background: white;
  .layout {
    width: ${LG_SIZE};
    h2 {
      font-weight: bold;
    }
    ${tw`pt-24 pb-16 mx-auto`}
    .aboutme {
      ${tw`pb-16 flex`}
      gap:0 2rem;
      img {
        ${tw`w-48 h-48 rounded-full`}
      }
      h3 {
        ${tw`text-2xl font-bold mb-6`}
      }
      p {
        ${tw`leading-6 mb-4`}
      }
      ul {
        ${tw``}
        li {
          ${tw`mr-3`}
          .anticon {
            ${tw`text-2xl text-gray-300`}
          }
          &:hover {
            .anticon {
              ${tw`text-gray-500`}
            }
          }
        }
      }
      .aboutme-btn-wrapper {
        ${tw`mt-4`}
        ${FLEX_STYLE("center", "center")};
        button {
          ${tw`ml-2 rounded-xl py-2 px-6`};
          ${BORDER_THIN("border")};
        }
      }
    }
    .policy {
      ${tw` leading-8`}
    }
  }
  @media (max-width: ${LG_SIZE}) {
    .layout {
      ${tw`w-full px-4`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    .layout {
      .aboutme {
        ${tw`block`}
        .image-wrapper {
          ${FLEX_STYLE("center", "center", "column")};
          ${tw`mb-8`}
        }
        ul {
          ${FLEX_STYLE("center", "center")};
          li {
            .anticon {
              ${FLEX_STYLE("center", "center")};
              ${tw`text-4xl`}
            }
          }
        }
      }
      .policy {
        ${tw`leading-6 text-xs`}
        h2 {
          ${tw`text-base`}
        }
        p {
          ${tw`leading-6`}
        }
      }
    }
  }
`;
interface IProps {}

const about: FC<IProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoAction());
  }, []);
  return (
    <>
      <Head>
        <title>Fall IN Asia - About us</title>
      </Head>
      <AboutPageWrapper>
        <main className="layout">
          <Divider style={{ marginBottom: "2rem" }} orientation="left">
            <h2>About us</h2>
          </Divider>
          <section className="aboutme">
            <div className="image-wrapper">
              <img
                src="https://user-images.githubusercontent.com/74864925/127884325-018d43e0-881c-4d70-baa8-145fc9098514.jpg"
                alt="profile-image"
              />
              <div className="aboutme-btn-wrapper">
                <button onClick={() => router.push("/news/post")}>기사 올리기</button>
              </div>
            </div>
            <div>
              <h3>안녕하세요. 개발자 장현수 입니다.</h3>
              <p>
                관광통역사 국가자격증 영어와 일본어 2개, 국외여행인솔자 자격증을 보유중이며
                통역가이드 및 호텔 지배인으로 일했었고 지금은 여행을 너무 사랑하는 개발자로
                살아가고있어요!
              </p>
              <ul>
                <li>
                  <a href="mailto:noah071610@naver.com">
                    <FontAwesomeIcon className="anticon" icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/salmonchobab/"
                    target="_blac
                "
                    rel="noreferrer"
                  >
                    <InstagramFilled />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/noah071610" rel="noreferrer">
                    <GithubFilled />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <Divider style={{ marginBottom: "2rem" }} orientation="left">
            <h2 id="policy">Policy</h2>
          </Divider>
          <section className="policy">
            <h2>
              제1조(개인정보의 처리 목적) 장현수('www.fallinasia.com'이하 'Fall IN Asia') 은(는)
              다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
              이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 겨우에는 「개인정보 보호법」
              제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </h2>
            <br />
            1. 홈페이지 회원가입 및 관리 댓글 및 좋아요 서비스 이용 목적으로 개인정보를 처리합니다.{" "}
            <br />
            <br />
            <h2>제2조(개인정보의 처리 및 보유 기간)</h2>
            <br />{" "}
            <p>
              ①<strong>장현수</strong>은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
              개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를
              처리·보유합니다. <br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. <br />
              1.홈페이지 회원가입 및 관리 <br />
              홈페이지 회원가입 및 관와 관련한 개인정보는 수집.이용에 관한 정보는{" "}
              <b style={{ color: "red" }}>언제든지 지체없이 파기 가능합니다.</b>{" "}
            </p>
            보유근거 : 댓글 및 좋아요 삭제 방지 <br />
            <br />
            <h2>제3조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h2>
            <br />
            <p>
              {" "}
              ① 정보주체는 장현수 에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를
              행사할 수 있습니다.
            </p>{" "}
            <br />
            <p>
              ② 제1항에 따른 권리 행사는장현수 에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라
              서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 장현수 은(는) 이에 대해 지체
              없이 조치하겠습니다.
            </p>
            <br />
            <br />
            <h2>제4조(처리하는 개인정보의 항목 작성)</h2>
            <br /> ① <strong>장현수</strong>은(는) 다음의 개인정보 항목을 처리하고 있습니다. <br />
            <b>본인 확인용 이메일과 이름 수집</b>
            <br />
            <br /> <h2>제5조(개인정보의 파기)</h2>
            <br /> ① 장현수 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
            되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            <br />
            <br />
            <h2>제6조(개인정보의 안전성 확보 조치)</h2>
            <br />
            <p>장현수은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <br />
            <p>
              1. 개인정보의 암호화이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
              본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금
              기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다
            </p>
            <br />{" "}
            <p>
              2. 개인정보에 대한 접근 제한개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
              부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며
              침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다
            </p>{" "}
            <br />
            <p>
              3. 문서보안을 위한 잠금장치 사용개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가
              있는 안전한 장소에 보관하고 있습니다.
            </p>
            <br />
            <br /> <h2>제7조 (개인정보 보호책임자)</h2>
            <br />
            <p>
              ① 장현수 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
              정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
              있습니다.
            </p>{" "}
            <br />• ▶ 개인정보 보호책임자
            <br /> • 성명 :장현수 <br />• 연락처 :010-5672-3486,
            <br />• noah071610@naver.com,
          </section>
        </main>
      </AboutPageWrapper>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(() => async ({}) => {
  return {
    props: {},
  };
});

export default about;
