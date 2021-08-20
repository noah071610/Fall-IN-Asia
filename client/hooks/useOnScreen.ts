import { useState, useEffect, RefObject } from "react";

const useOnScreen = (ref: RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // observer를 생성합니다.
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    // MomentList의 ref를 넣어줍니다.
    if (ref?.current !== null) {
      //ref는 최초 null값이고 렌더링시 dom을 잡아옵니다.
      //이에 알맞게 if문을 넣어줬습니다.
      observer.observe(ref.current);
    }
    return () => {
      // 메모리 낭비를 위해 unmount시 연결을 끊어줍니다.
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
