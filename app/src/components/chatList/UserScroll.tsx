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
}

const UserScroll: FC<OwnProps> = ({ pushToUser }) => {
  const { email } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    usersStore: { getUserListStatus, userList, isHasMore },
    usersReducer: { getUserList, resetStatus },
  } = useUsersRedux();

  const fetchMoreData = useCallback(async () => {
    if (isLoading) {
      return;
    }
    if (!isHasMore) {
      setHasMore(false);
    }

    setIsLoading(true);
    getUserList({
      offset: userList?.length || 0,
      accessToken: getItemToSesstion("access_token"),
    });
  }, [isLoading]);

  useEffect(() => {
    if (getUserListStatus === 200) {
      setIsLoading(false);
    }

    resetStatus();
  }, [getUserListStatus]);

  return (
    <InfinityScroll loadMore={fetchMoreData} hasMore={hasMore}>
      {userList === null || userList?.length === 0 ? (
        <S.EmptyData>대화할 대상이 존재하지 않습니다.</S.EmptyData>
      ) : (
        userList?.map((v) => (
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
              {!!!v.is_read && <div className="notReadMark" />}
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

export default UserScroll;
