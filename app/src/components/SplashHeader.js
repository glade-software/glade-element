import { Box, Heading, Image } from "grommet";
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/" replace>
        <Box>
            <Box align="center">
            <Heading>glade</Heading>
            </Box>
            <Box align="center">
                <Image src="/glade-rounded.png" width={300}></Image>
            </Box>
        </Box>
    </Link>
  );
};

export default Header;
