import React from "react";
import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraButton ref={ref} background="cyan.500" {...props}>
        {children}
      </ChakraButton>
    );
  }
);

Button.displayName = "Button";
export default Button;
