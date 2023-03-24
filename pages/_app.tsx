import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#355E3B",
    secondary: "#D5C7B1",
    base: "#FFFFFF",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
