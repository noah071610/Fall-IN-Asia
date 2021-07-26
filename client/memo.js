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


