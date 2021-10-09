import { Nav, Logo, NavMenu, UserImg } from './header-styles';

export default function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
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
      <UserImg src='/images/user-groot.jpg' />
    </Nav>
  );
}
