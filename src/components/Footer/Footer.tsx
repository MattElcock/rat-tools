import { Box, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Stack fontSize="sm">
        <Text>
          If you are concerned about the health or wellbeing of your pet, please
          consult a veterinary professional.
        </Text>
        <Text>
          Curious rats image by{" "}
          <Link
            href="https://www.freepik.com/free-vector/hand-drawn-rat-silhouette_49273747.htm"
            color="#669ee9"
            target="_blank"
            rel="noopener"
            textDecoration="underline"
          >
            Freepik
          </Link>
          .
        </Text>
      </Stack>
    </Box>
  );
};

export { Footer };
