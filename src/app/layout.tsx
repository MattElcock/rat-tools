import { Header } from "@/components/Header";
import { Box, Container, Stack } from "@chakra-ui/react";
import { Providers } from "./providers";
import Image from "next/image";
import { Breadcrumbs } from "@/features/Breadcrumbs";
import { Footer } from "@/components/Footer";
import theme from "./theme";
import { Suspense } from "react";
import { Raleway } from "next/font/google";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

const roboto = Raleway({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      url: "/favicon/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      url: "/favicon/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/favicon/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      url: "/favicon/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      url: "/favicon/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/favicon/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      url: "/favicon/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/favicon/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/manifest.json",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" style={{ minHeight: "100vh" }}>
      <body style={{ height: "100vh" }} className={roboto.className}>
        <Providers>
          <div
            style={{
              height: "100%",
              display: "grid",
              gridTemplateRows: "auto 1fr auto",
              gap: 1,
            }}
          >
            <header>
              <Container bg={theme.colors.primary} color="black" py={3} px={8}>
                <Header />
              </Container>
            </header>
            <Box as="main" mb={65} pb={5}>
              <Container py={3} px={8}>
                <Stack spacing={3}>
                  <Suspense>
                    <Breadcrumbs />
                  </Suspense>
                  {children}
                </Stack>
              </Container>
            </Box>
            <footer>
              <Container mb={-3} zIndex={-1} position="relative">
                <Image src="/rats.png" alt={""} width={552} height={99} />
              </Container>
              <Container py={3} px={8} bg={theme.colors.primary} color="black">
                <Footer />
              </Container>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
