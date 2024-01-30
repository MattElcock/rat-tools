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

export function Providers({ children }: { children: React.ReactNode }) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const clientUrl = `${
      process.env.NEXT_PUBLIC_IS_LOCAL ? "http" : "https"
    }://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`;
    const client = createClient({
      url: clientUrl,
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
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
