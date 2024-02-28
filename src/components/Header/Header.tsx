import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="48px 1fr"
      alignItems="center"
      gap={3}
    >
      <Image
        src="/logo_128.png"
        alt="Logo"
        width={48}
        height={48}
        style={{ borderRadius: 10 }}
      />
      <Text fontSize="2xl" as="h1" className={poppins300.className}>
        My
        <Text as="span" className={poppins400.className}>
          Mischief
        </Text>
      </Text>
    </Box>
  );
};

export { Header };
