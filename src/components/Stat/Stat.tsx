import { Box, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { ReactNode } from "react";

interface StatProps {
  icon: ReactElement;
  title: string;
  subtitle?: string;
  value: string;
}

const Stat = ({ icon, title, subtitle, value }: StatProps) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      {React.cloneElement(icon, { size: "3em", color: "#09203F" })}
      <Box>
        <Text fontWeight={600} color="GrayText">
          {title}
        </Text>
        <Text fontSize="lg">{value}</Text>
        {subtitle && (
          <Text fontSize="xs" mb={1}>
            {subtitle}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export { Stat };
