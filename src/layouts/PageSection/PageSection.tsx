import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  title: string;
}

const PageSection = ({ title, children }: PageSectionProps) => {
  return (
    <Box>
      <Stack spacing={5}>
        <Text fontSize="3xl" as="h3">
          {title}
        </Text>
        {children}
      </Stack>
    </Box>
  );
};

export { PageSection };
