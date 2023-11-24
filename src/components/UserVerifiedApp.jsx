import React, { useEffect } from 'react';
import { Footer } from './common/footer';
import { Header } from './common/header';
import { MaxWidth } from './common/maxWidth';
import '../styles/index.scss';
import { Outlet } from 'react-router-dom';
import { isLoggedInState } from 'recoil/storage';
import { useSetRecoilState } from 'recoil';
import { useGetUser } from '../hooks';

export default function UserVerifiedApp() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const { data, error } = useGetUser();

  useEffect(() => {
    if (data) {
      setIsLoggedIn(true);
    } else if (error && error.response && error.response.status === 403) {
      setIsLoggedIn(false);
    }
  }, [data, error, setIsLoggedIn]);

  return (
    <div className="entireWrapper">
      <Header />
      <main>
        <MaxWidth>
          <Outlet />
        </MaxWidth>
      </main>
      <Footer />
    </div>
  );
}
