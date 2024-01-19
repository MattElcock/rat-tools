import { Header } from "@/components/Header";
import { Box, Container, Stack } from "@chakra-ui/react";
import { Providers } from "./providers";
import Image from "next/image";
import { Breadcrumbs } from "@/features/Breadcrumbs";
import { Footer } from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" style={{ minHeight: "100vh" }}>
      <body style={{ height: "100vh" }}>
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
              <Container bg="#09203F" color="white" py={3} px={8}>
                <Header />
              </Container>
            </header>
            <Box as="main" mb={65} pb={5}>
              <Container py={3} px={8}>
                <Stack spacing={3}>
                  <Breadcrumbs />
                  {children}
                </Stack>
              </Container>
            </Box>
            <footer>
              <Container
                py={3}
                px={8}
                bg="#09203F"
                color="white"
                position="relative"
              >
                <Box position="absolute" top={-65} zIndex={-1}>
                  <Image src="/rats.png" alt={""} width={552} height={99} />
                </Box>
                <Footer />
              </Container>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
