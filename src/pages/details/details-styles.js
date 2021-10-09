import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageTitle = styled.div`
  margin-top: 20px;
  height: 20vh;
  min-height: 170px;
  width: 25vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Controls = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const Play = styled.button`
  display: flex;
  align-items: center;
  height: 56px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.8;
  border-radius: 4px;
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  background: rgb(249, 249, 249);
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const Trailer = styled(Play)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
export const Add = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
export const GroupWatch = styled(Add)`
  background: rgb(0, 0, 0);
`;

export const Subtitle = styled.p`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
export const Description = styled.p`
  width: 45%;
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
`;
