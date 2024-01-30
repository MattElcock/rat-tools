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
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: "http://localhost:3000/api/graphql",
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
