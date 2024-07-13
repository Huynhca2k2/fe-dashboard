import {
  BarChartIcon,
  BookmarkIcon,
  CalendarIcon,
  CubeIcon,
  EnvelopeClosedIcon,
  GearIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";

function Sidebar({ isOpenMenu }) {
  return (
    <Flex
      className={`min-w-16 h-full ${
        isOpenMenu && "w-[160px]"
      } bg-slate-200 !flex-col gap-3 pt-3 px-3 !hidden sm:!flex`}
    >
      <Flex className="items-center !cursor-pointer gap-2 rounded !bg-slate-50">
        <IconButton
          size="3"
          className=" !text-gray-600 !bg-transparent !cursor-pointer"
        >
          <PersonIcon width="24" height="24" />
        </IconButton>

        {isOpenMenu && <Text>Users</Text>}
      </Flex>
      <Flex className=" items-center gap-2 rounded !cursor-pointer hover:!bg-slate-50 ">
        <IconButton
          size="3"
          className="!bg-transparent !cursor-pointer  !text-gray-600"
        >
          <BookmarkIcon width="24" height="24" />
        </IconButton>
        {isOpenMenu && <Text>Bookmark</Text>}
      </Flex>

      <Flex className=" items-center gap-2 rounded  !cursor-pointer hover:!bg-slate-50 ">
        <IconButton
          size="3"
          className="!bg-transparent !cursor-pointer  !text-gray-600"
        >
          <EnvelopeClosedIcon width="24" height="24" />
        </IconButton>
        {isOpenMenu && <Text>Email</Text>}
      </Flex>
      <Flex className=" items-center gap-2 rounded  !cursor-pointer hover:!bg-slate-50 ">
        <IconButton
          size="3"
          className="!bg-transparent !cursor-pointer  !text-gray-600"
        >
          <ImageIcon width="24" height="24" />
        </IconButton>
        {isOpenMenu && <Text>Image</Text>}
      </Flex>
      <Flex className="items-center gap-2 rounded   !cursor-pointer hover:!bg-slate-50">
        <IconButton
          size="3"
          className="!bg-transparent !cursor-pointer  !text-gray-600"
        >
          <CalendarIcon width="24" height="24" />
        </IconButton>
        {isOpenMenu && <Text>Calendar</Text>}
      </Flex>
      <Flex className=" items-center gap-2 rounded  !cursor-pointer hover:!bg-slate-50 ">
        <IconButton
          size="3"
          className="!bg-transparent !cursor-pointer  !text-gray-600"
        >
          <GearIcon width="24" height="24" />
        </IconButton>
        {isOpenMenu && <Text>Setting</Text>}
      </Flex>
    </Flex>
  );
}

export default Sidebar;
