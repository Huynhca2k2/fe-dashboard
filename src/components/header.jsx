import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import defaultAvatar from "../assets/images/imgUser.png";
import { BellIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <Flex className="h-16 border-b-2 border-gray-100 items-center px-3 sm:px-0">
      <Box className="sm:h-16 sm:w-16 h-12 w-12 rounded-lg sm:rounded-none !flex justify-center items-center cursor-pointer bg-gray-800">
        <HamburgerMenuIcon className="h-6 w-6 text-white" />
      </Box>
      <Container size="4" className="justify-center">
        <Flex className="w-full sm:!justify-between !justify-end items-center ">
          <Heading as="h4" className="hidden sm:block">
            HRDept Company
          </Heading>
          <Flex className="!gap-4 sm:!gap-9" align="center">
            <Box className="relative">
              <BellIcon className="h-6 w-6" />
              <Badge
                color="red"
                radius="full"
                className="absolute top-[-10px] right-[-20px]"
              >
                2+
              </Badge>
            </Box>

            <Flex gap="3" align="center">
              <Box>
                <Text
                  as="div"
                  size="2"
                  weight="bold"
                  className="text-right hidden sm:block"
                >
                  Cai Hoang Huynh
                </Text>
                <Text
                  as="div"
                  size="2"
                  color="gray"
                  className="text-right hidden sm:block"
                >
                  Admin
                </Text>
              </Box>
              <Avatar size="3" src={defaultAvatar} radius="full" fallback="T" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Header;
