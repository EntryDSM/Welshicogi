import React, { FC } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { Loading } from "../../assets";
import * as S from "./style";

interface OwnProps {
  loadMore: () => void;
  hasMore: boolean;
  isReverse?: boolean;
}

const LoadingBar: FC = () => {
  return (
    <S.Loading key="loading">
      <Loading />
    </S.Loading>
  );
};

const InfinityScroll: FC<OwnProps> = ({
  loadMore,
  hasMore,
  isReverse = false,
  children,
}) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      loader={<LoadingBar />}
      hasMore={hasMore}
      useWindow={false}
      isReverse={isReverse}
      threshold={10}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfinityScroll;
