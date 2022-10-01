import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: '#f5fbfd';
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  z-index: 2;
`;

const Info = styled.div`
  display: flex;
`;

const Icon = styled.div`
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Circle>
        <Image src={product.img}></Image>
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <Link to={`/product/${product._id}`}>
              <SearchOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <FavoriteOutlinedIcon />
          </Icon>
        </Info>
      </Circle>
    </Container>
  );
};

export default Product;
