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
    <Link as={NextLink} href={href}>
      <Card
        direction="row"
        overflow="hidden"
        variant="elevated"
        borderRadius={10}
        bg="#669ee9"
        color="white"
      >
        <Box
          display="flex"
          alignItems="top"
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
