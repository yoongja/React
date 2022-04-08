import styled from "styled-components";

interface ContainerProps {
  bgColor : string;
}

const Container = styled.div<ContainerProps>` //Container styled component에게 TypeScript한테 circleProps를 받을 것이라는 걸 명시해줌
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
} //TypeScript에게 bgColor는 string이 되어야 한다고 설명해준다.



function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />; // Circle은 bgColor prop을 받아서 Container에 prop으로 동일하게 보내준다.
}

export default Circle;