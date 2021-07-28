// useEffect(() => {
//   if (isPossibleRoute) {
//     if (localStorage.getItem("visited_club")) {
//       setClubHistory([query?.group, ...JSON.parse(localStorage.getItem("visited_club")!)]);
//     } else {
//       setClubHistory([query?.group as string]);
//     }
//     setClubHistory((prev) => [...new Set(prev)]);
//   }
// }, [query, isPossibleRoute]);

// useEffect(() => {
//   return () => {
//     if (0 < clubHistory.length && clubHistory.length < 6 && isPossibleRoute) {
//       localStorage.setItem("visited_club", JSON.stringify(clubHistory));
//     }
//   };
// }, [clubHistory, isPossibleRoute]);
