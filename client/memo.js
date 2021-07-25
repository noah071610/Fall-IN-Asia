query }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await store.dispatch(getUserInfoAction());
  await store.dispatch(studySlice.actions.selectStudyPost(query.postId || 0));


useEffect(() => {
  if (isPossibleRoute) {
    if (localStorage.getItem("visited_club")) {
      setClubHistory([query?.group, ...JSON.parse(localStorage.getItem("visited_club")!)]);
    } else {
      setClubHistory([query?.group as string]);
    }
    setClubHistory((prev) => [...new Set(prev)]);
  }
}, [query, isPossibleRoute]);

useEffect(() => {
  return () => {
    if (0 < clubHistory.length && clubHistory.length < 6 && isPossibleRoute) {
      localStorage.setItem("visited_club", JSON.stringify(clubHistory));
    }
  };
}, [clubHistory, isPossibleRoute]);


 { postId: number; password: string; userId: number }

// export const MODAL_STYLE = (tailRight: string) => `
  `position: absolute;
  padding: 2rem;
  ${BORDER_THIN("border")};
  background-color: ${WHITE_COLOR};
  box-shadow: 0px 0px 15px ${RGB_BLACK(0.2)};
  z-index:1;
  &:before {
    position: absolute;
    transform: rotateZ(45deg);
    z-index: 1;
    width: 9px;
    height: 9px;
    background-color: ${WHITE_COLOR};
    ${BORDER_THIN("border")};
    border-bottom: none;
    border-right: none;
    content: "";
    top: -6px;
    right: ${tailRight};
  }
`;


react-masonry-css
react-image-crop

    const prevPosts = await this.mainPostsRepository.find({
      where: { country_name: group, id: MoreThan(postId) },
      relations: ['user'],
      order: { id: 'DESC' },
      take: 4,
    });
              .createQueryBuilder('posts')
      .select('posts.country_name')
      .addSelect('COUNT(*)', 'cnt')
      .groupBy('posts.country_name')
      .orderBy('cnt', 'DESC')
      .getMany();

<ul className="another-stories">
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
      </ul>
.another-stories {
  ${tw`my-8 overflow-hidden rounded-2xl`}
  li {
    ${tw`flex w-full cursor-pointer p-4 hover:bg-gray-100`}
    img {
      ${tw`w-20 h-16 mr-4 rounded-md`}
    }
    h4 {
      margin-bottom: 0.5rem;
    }
    p {
      ${FONT_STYLE(0.94, true)}
    }
  }
}