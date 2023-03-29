import { GithubIcon } from "@/assets/icons/github";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { PaletteIcon } from "@/assets/icons/palette";

interface SideBarProps {
  toggleColorMode: () => void;
}
export const SideBar = ({ toggleColorMode }: SideBarProps) => {
  return (
    <>
      <Flex>
        <Link
          href="https://github.com/matt765/4-websites"
          isExternal
          width="3rem"
          fill="githubIcon"
          _hover={{ fill: "rgb(255,255,255,0.9)" }}
          transition="0.3s"
        >
          <Flex width="3rem">
            <Icon as={GithubIcon} />
          </Flex>
        </Link>
      </Flex>
    </>
  );
};
