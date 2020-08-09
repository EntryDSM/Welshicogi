import React, { FC, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";

import { useUsersRedux } from "container/users";
import { getItemToSesstion } from "utils/stroage";
import { convertTimeStempToNowDate, decodingEmail } from "utils/convert";
import InfinityScroll from "components/infinityScroll";
import * as S from "./style";

interface OwnProps {
  pushToUser: (data: {
    email: string;
    name: string;
    receipt_code: number;
  }) => void;
  name: string;
}

const SearchScroll: FC<OwnProps> = ({ pushToUser, name }) => {
  const { email } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    usersStore: { searchUserStatus, searchList, isHasMore },
    usersReducer: { searchUser, resetStatus },
  } = useUsersRedux();

  const fetchMoreData = useCallback(async () => {
    if (isLoading) {
      return;
    }
    if (!isHasMore) {
      setHasMore(false);
    }

    setIsLoading(true);
    searchUser({
      name,
      offset: searchList?.length || 0,
      accessToken: getItemToSesstion("access_token"),
    });
  }, [isLoading]);

  useEffect(() => {
    if (searchUserStatus === 200) {
      setIsLoading(false);
    }

    resetStatus();
  }, [searchUserStatus]);

  return (
    <InfinityScroll loadMore={fetchMoreData} hasMore={hasMore}>
      {searchList === null || searchList?.length === 0 ? (
        <S.EmptyData>해당 유저를 찾을 수 없습니다.</S.EmptyData>
      ) : (
        searchList?.map((v) => (
          <S.ChatUser
            key={v.qna_id}
            onClick={() => pushToUser(v.user)}
            isActive={email && decodingEmail(email) === v.user.email}
          >
            <div>
              <p>
                <span>{v.user.name}</span>
                {v.user.receipt_code}
              </p>
              <div className="notReadMark" />
            </div>
            <div>
              <p className="message">{v.content}</p>
              <p>{convertTimeStempToNowDate(v.created_at)}</p>
            </div>
          </S.ChatUser>
        ))
      )}
    </InfinityScroll>
  );
};

export default SearchScroll;
