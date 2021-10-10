import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from '../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { auth, provider } from '../../lib/firebase';
import { useHistory } from 'react-router';

import {
  Nav,
  Logo,
  NavMenu,
  UserImg,
  Login,
  LoginContainer,
} from './header-styles';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [user, setUser] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            user: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push('/');
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          user: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      setUser(user.displayName);
      history.push('/');
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push('/login');
    });
    setUser('');
  };

  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      {!user || user.length === '' ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src='/images/home-icon.svg' alt='home-icon' />
              <span>home</span>
            </a>
            <a>
              <img src='/images/search-icon.svg' alt='Search-icon' />
              <span>search</span>
            </a>
            <a>
              <img src='/images/watchlist-icon.svg' alt='watchlist-icon' />
              <span>watchlist</span>
            </a>
            <a>
              <img src='/images/original-icon.svg' alt='original-icon' />
              <span>originals</span>
            </a>
            <a>
              <img src='/images/movie-icon.svg' alt='movies-icon' />
              <span>movies</span>
            </a>
            <a>
              <img src='/images/series-icon.svg' alt='series-icon' />
              <span>series</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src='/images/user-groot.jpg' />
        </>
      )}
    </Nav>
  );
}
