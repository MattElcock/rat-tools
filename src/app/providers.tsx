"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { ApolloWrapper } from "@/api/provider";
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloWrapper>{children}</ApolloWrapper>
    </ChakraProvider>
  );
}
