import { Nav, Anchor, Box, Header } from "grommet";

const NavBar = () => {
  return (
      <Header pad="small" background="brand">
        <Box direction="row">
          <img src="/glade-rounded-with-stroke.png" width={32} />
        </Box>
        <Nav direction="row">
          {/* <Anchor href="/dashboard" label="dashboard" key="dashboard" /> */}
        </Nav>
      </Header>
  );
};

export default NavBar;
