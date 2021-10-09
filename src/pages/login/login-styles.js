import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: calc(100vh - 70px);

  &::before {
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

export const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CTALogoOne = styled.img``;
export const CTALogoTwo = styled.img`
  width: 90%;
`;

export const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  margin: auto;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align: center;
`;
