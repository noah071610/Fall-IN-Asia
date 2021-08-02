import { ICountry } from "@typings/db";
import { FC, useCallback, useState } from "react";
import { MainCountryAnnouncementWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate } from "config";
import { Divider } from "antd";
import ReactHtmlParser from "react-html-parser";

interface IProps {
  country: ICountry;
}

const MainCountryAnnouncement: FC<IProps> = ({ country }) => {
  const [type, setType] = useState<string | null>(null);
  const [warning, setWarning] = useState(false);
  const [covid, setCovid] = useState(false);
  const [alert, setAlert] = useState(false);
  const { data, error, revalidate } = useSWR<any>(
    type ? `/country/info/${country?.code}/${type || ""}` : null,
    fetcher,
    noRevalidate
  );

  const onClickCovid = useCallback(() => {
    setWarning(false);
    setType("CountryCovid19SafetyServiceNew_getCountrySafetyNewsListNew");
    setCovid((prev) => !prev);
    setAlert(false);
  }, []);
  const onClickAlert = useCallback(() => {
    setWarning(false);
    setType("CountrySafetyService2_getCountrySafetyList2");
    setCovid(false);
    setAlert((prev) => !prev);
  }, []);
  const onClickWarning = useCallback(() => {
    setWarning((prev) => !prev);
    setCovid(false);
    setAlert(false);
  }, []);

  return (
    <MainCountryAnnouncementWrapper>
      <ul>
        <li onClick={onClickCovid}>코로나 관련 소식</li>
        <li onClick={onClickAlert}>안전공지</li>
        <li onClick={onClickWarning}>여행경보</li>
      </ul>
      {(covid || alert) && !warning && data && (
        <div className="announcement">{data?.content ? ReactHtmlParser(data.content) : null}</div>
      )}
      {warning && (
        <div className="announcement">
          <img
            src="https://www.0404.go.kr/imgsrc.mofa?atch_file_id=FILE_000000000010504&file_sn=3"
            alt="warning"
          />
        </div>
      )}
    </MainCountryAnnouncementWrapper>
  );
};

export default MainCountryAnnouncement;
