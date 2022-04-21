import styled from "styled-components";

interface ContainerProps {
  bgColor : string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>` //Container styled component에게 TypeScript한테 circleProps를 받을 것이라는 걸 명시해줌
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor}; //props를 통해서 bgColor를 받기
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?:string;
} //TypeScript에게 bgColor는 string이 되어야 한다고 설명해준다.(optional props)


//component에게 Typescript사용하는 것 알려주기
function Circle({ bgColor ,borderColor, text = "default text"}: CircleProps) {
  return (
  <Container bgColor={bgColor} borderColor={borderColor ?? "green"}>
    {text}
  </Container>
  ) ; // Circle은 bgColor prop을 받아서 Container에 prop으로 동일하게 보내준다.
}//undefined이면 사용할 초기값을 설정해주기

export default Circle;