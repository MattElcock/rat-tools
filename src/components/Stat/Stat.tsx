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
    <Box display="flex" alignItems="top" gap={2}>
      {React.cloneElement(icon, { size: "2.5em", color: "#09203F" })}
      <Box>
        <Text fontWeight={600} color="GrayText" lineHeight={1} mb={0.5}>
          {title}
        </Text>
        {subtitle && (
          <Text fontSize="sm" lineHeight={1} mb={1}>
            {subtitle}
          </Text>
        )}
        <Text fontSize="lg" lineHeight={1}>
          {value}
        </Text>
      </Box>
    </Box>
  );
};

export { Stat };
