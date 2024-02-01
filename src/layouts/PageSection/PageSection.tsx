import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  title: string;
}

const PageSection = ({ title, children }: PageSectionProps) => {
  return (
    <Box>
      <Stack spacing={4}>
        <Text fontSize="2xl" as="h3" lineHeight={1}>
          {title}
        </Text>
        {children}
      </Stack>
    </Box>
  );
};

export { PageSection };
