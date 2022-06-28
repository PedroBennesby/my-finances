import { ChakraProvider } from '@chakra-ui/react';
import { PercentagesProvider } from '../contexts/percentagesProvider';

function MyApp({ Component, pageProps }) {
  return (
    <PercentagesProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </PercentagesProvider>
  );
}

export default MyApp;
