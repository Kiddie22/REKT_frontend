import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from './Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: 'column',
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: 'none',
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: '#fff8f8',
  })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Socials = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 0;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>REKT.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          molestiae deleniti. Dicta quam quod voluptatum eum magni eius
          doloremque officia, voluptates repellendus deserunt exercitationem,
          excepturi veritatis molestiae dolores nostrum delectus?
        </Desc>
        <Socials>
          <Icon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </Icon>
          <Icon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </Icon>
          <Icon color="55ACEE">
            <TwitterIcon></TwitterIcon>
          </Icon>
        </Socials>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <ListItem>Cart</ListItem>
          </Link>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: '10px' }}></LocationOnIcon>
          Colombo, Sri Lanka
        </ContactItem>
        <ContactItem>
          <PhoneIphoneIcon style={{ marginRight: '10px' }}></PhoneIphoneIcon>
          +94 123 4567 89
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '10px' }}></EmailIcon>
          contact@rekt.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
