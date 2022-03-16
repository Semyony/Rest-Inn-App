import styled from "styled-components";

export const Heading = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  font-family: "Fredoka", sans-serif;
  font-size: 30px;
  justify-content:center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const SectionName = (props) => {
  return (
    <>
      <Heading>{props.name}</Heading>
    </>
  );
};

export default SectionName;
