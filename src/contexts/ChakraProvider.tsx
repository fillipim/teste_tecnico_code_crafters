import {
  ChakraProvider as Provider,
  defaultSystem,
  Theme,
} from "@chakra-ui/react";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "@/components/ColorMode";

export function ChakraProvider(props: ColorModeProviderProps) {
  return (
    <Provider value={{ ...defaultSystem }}>
      <ColorModeProvider forcedTheme="light">
        <Theme appearance="light" {...props} />
      </ColorModeProvider>
    </Provider>
  );
}
