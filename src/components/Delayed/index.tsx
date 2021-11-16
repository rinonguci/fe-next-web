import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
type Props = {
  children: any;
  waitBeforeShow?: number;
};

const Delayed = ({ children, waitBeforeShow = 500 }: Props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : <Skeleton count={10} />;
};

export default Delayed;
