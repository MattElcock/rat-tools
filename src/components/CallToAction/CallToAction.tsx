import theme from "@/app/theme";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ReactElement } from "react";

interface CallToActionProps {
  icon: ReactElement;
  href: string;
  title: string;
  text: string;
}

const CallToAction = ({ icon, title, text, href }: CallToActionProps) => {
  return (
    <Link as={NextLink} href={href} textDecoration="none">
      <Card
        direction="row"
        overflow="hidden"
        variant="elevated"
        borderRadius={10}
        bg={theme.colors.secondary}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mx={5}
          py={3}
        >
          {React.cloneElement(icon, { fontSize: 75 })}
        </Box>
        <Stack>
          <CardBody pl={0} p={3}>
            <Heading size="md" fontWeight="normal">
              {title}
            </Heading>
            <Text py="2" fontSize="sm">
              {text}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export { CallToAction };
