import { Nav, Anchor, Box, Header } from "grommet";
const NavBar = ({currentUser}) => {
  return (
      <Header pad="small" background="brand">
        <Box direction="row">
          <img src="/glade-rounded-with-stroke.png" width={32} />
        </Box>
        <Nav direction="row">
          <Anchor href="/" label="logout" key="logout" onClick={currentUser?.signOut} />
        </Nav>
      </Header>
  );
};

export default NavBar;
