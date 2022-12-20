import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: inline-block;
  margin-top: 1rem;
  border-radius: 5rem;
  background: #333;
  color: #fff;
  padding: 0.9rem 3.5rem;
  cursor: pointer;
  font-size: 1.7rem;
  &:hover {
    background-color: var(--orange);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Image src={item.img} />
      <Info>
        <Link to="/Products">
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
