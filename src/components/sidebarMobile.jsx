import {
  BarChartIcon,
  BookmarkIcon,
  CalendarIcon,
  Cross1Icon,
  Cross2Icon,
  CubeIcon,
  EnvelopeClosedIcon,
  GearIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";

function SidebarMoBile({ handleToggleMenuMobile, isOpenMenuMobile }) {
  return (
    <Flex
      className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 z-10 transform transition-transform duration-500 ease-out ${
        isOpenMenuMobile ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Flex
        className={`min-w-16 h-full w-[60%] bg-slate-200 !flex-col gap-3 pt-3 px-3 
      `}
      >
        <Flex className="items-center !cursor-pointer !justify-end gap-2 rounded ">
          <IconButton
            size="2"
            className=" !text-gray-600 !bg-transparent !cursor-pointer"
            onClick={handleToggleMenuMobile}
          >
            <Cross2Icon width="24" height="24" />
          </IconButton>
        </Flex>
        <Flex className="items-center !cursor-pointer gap-2 rounded !bg-slate-50">
          <IconButton
            size="3"
            className=" !text-gray-600 !bg-transparent !cursor-pointer"
          >
            <PersonIcon width="24" height="24" />
          </IconButton>

          <Text>Users</Text>
        </Flex>
        <Flex className=" items-center gap-2 rounded !cursor-pointer hover:!bg-slate-50 ">
          <IconButton
            size="3"
            className="!bg-transparent !cursor-pointer  !text-gray-600"
          >
            <BookmarkIcon width="24" height="24" />
          </IconButton>
          <Text>Bookmark</Text>
        </Flex>

        <Flex className=" items-center gap-2 rounded  !cursor-pointer hover:!bg-slate-50 ">
          <IconButton
            size="3"
            className="!bg-transparent !cursor-pointer  !text-gray-600"
          >
            <EnvelopeClosedIcon width="24" height="24" />
          </IconButton>
          <Text>Email</Text>
        </Flex>
        <Flex className=" items-center gap-2 rounded  !cursor-pointer hover:!bg-slate-50 ">
          <IconButton
            size="3"
            className="!bg-transparent !cursor-pointer  !text-gray-600"
          >
            <ImageIcon width="24" height="24" />
          </IconButton>
          <Text>Image</Text>
        </Flex>
        <Flex className="items-center gap-2 rounded   !cursor-pointer hover:!bg-slate-50">
          <IconButton
            size="3"
            className="!bg-transparent !cursor-pointer  !text-gray-600"
          >
            <CalendarIcon width="24" height="24" />
          </IconButton>
          <Text>Calendar</Text>
        </Flex>
        <Flex className=" items-center gap-2 rounded  !cursor-pointer hover:!bg-slate-50 ">
          <IconButton
            size="3"
            className="!bg-transparent !cursor-pointer  !text-gray-600"
          >
            <GearIcon width="24" height="24" />
          </IconButton>
          <Text>Setting</Text>
        </Flex>
      </Flex>
      <Box className="w-[40%] h-full" onClick={handleToggleMenuMobile}></Box>
    </Flex>
  );
}

export default SidebarMoBile;
