import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: rgb(21, 56, 55);
  height: 30px;
  font-size: x-small;
  color: aliceblue;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter className="pt-2 w-100">
      💖 ©2024 Catalina-Alexandra Jora
    </StyledFooter>
  );
};

export default Footer;
