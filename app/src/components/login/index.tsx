import React, { FC, useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { setItemToSesstion } from "utils/stroage";
import { useUsersRedux } from "container/users";
import { Logo } from "assets/index";
import * as S from "./style";

const Login: FC = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const {
    usersStore: { loginStatus },
    usersReducer: { login, resetStatus },
  } = useUsersRedux();

  const handleId = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setId(value);
    },
    []
  );
  const handlePw = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setPw(value);
    },
    []
  );
  const doLogin = useCallback(() => {
    login({ email: id, password: pw });
  }, [id, pw]);

  useEffect(() => {
    if (loginStatus === 200) {
      alert("로그인 되었습니다.");
      location.href = "/";
    } else if (loginStatus === 401) {
      alert("이메일 또는 비밀번호가 불일치 합니다.");
    }

    resetStatus();
  }, [loginStatus]);

  return (
    <S.Wrapper>
      <S.LoginBox>
        <img src={Logo} alt="로고" />
        <input value={id} onChange={handleId} placeholder="ID" type="text" />
        <input
          value={pw}
          onChange={handlePw}
          placeholder="••••••••"
          type="password"
        />
        <button onClick={doLogin}>로그인</button>
      </S.LoginBox>
    </S.Wrapper>
  );
};

export default Login;
