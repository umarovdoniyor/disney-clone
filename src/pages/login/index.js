import {
  Container,
  CTA,
  CTALogoOne,
  CTALogoTwo,
  SignUp,
  Description,
} from './login-styles';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' alt='cta logo' />
        <SignUp>Get all there</SignUp>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat
          quae vel rerum porro consequuntur nobis, dignissimos laudantium, sint
          hic nisi reiciendis iusto tempore! Officiis ipsum officia autem quod
          perspiciatis.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' alt='cta logo' />
      </CTA>
    </Container>
  );
}

export default Login;
