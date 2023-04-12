import { Box } from "@chakra-ui/react";

interface NavigationAnchorProps {
  id: string;
}

export const NavigationAnchor = ({ id }: NavigationAnchorProps) => (
  <Box position={{ base: "relative", xl: "unset"}}>
    {/* Solution necessary for mobile navbar to navigate with proper offset */}
    <Box
      id={id}     
      top={{ base: "-7rem", xl: "unset" }}
      position={{ base: "absolute", xl: "unset"}}
    />
  </Box>
);
