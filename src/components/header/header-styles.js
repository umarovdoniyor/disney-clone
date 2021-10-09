import styled from 'styled-components';

export const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    :hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

export const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
