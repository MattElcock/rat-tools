import { Header } from "@/components/Header";
import { Container } from "@chakra-ui/react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              <Container bg="black" color="white" py={2}>
                <Header />
              </Container>
            </header>
            <main>
              <Container py={2}>{children}</Container>
            </main>
            <footer>
              <Container py={2}>
                <p>Footer</p>
              </Container>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
