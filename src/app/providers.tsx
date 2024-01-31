// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import {
  UrqlProvider,
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next";

import { useMemo } from "react";

const getClientUrl = () => {
  const slug = "api/graphql";
  if (process.env.NEXT_PUBLIC_IS_LOCAL) {
    return `http://localhost:3000/${slug}`;
  } else {
    switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
      case "preview": {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug}`;
      }
      case "production": {
        return `https://rat-tools.vercel.app/${slug}`;
      }
      default: {
        return `http://localhost:3000/${slug}`;
      }
    }
  }
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: getClientUrl(),
      exchanges: [cacheExchange, ssr, fetchExchange],
    });

    return [client, ssr];
  }, []);

  return (
    <ChakraProvider>
      <UrqlProvider client={client} ssr={ssr}>
        {children}
      </UrqlProvider>
    </ChakraProvider>
  );
}
