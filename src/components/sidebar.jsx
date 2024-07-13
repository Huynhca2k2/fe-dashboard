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
import { Box, IconButton } from "@radix-ui/themes";

function Sidebar() {
  return (
    <Box className="w-16 h-full bg-slate-200 flex-col items-center gap-3 pt-3 !hidden sm:!flex">
      <IconButton
        size="3"
        className="!bg-transparent !text-gray-600 !cursor-pointer"
      >
        <MagnifyingGlassIcon width="24" height="24" />
      </IconButton>

      <IconButton
        size="3"
        className="!bg-slate-50 !text-gray-600 !cursor-pointer"
      >
        <PersonIcon width="24" height="24" />
      </IconButton>
      <IconButton
        size="3"
        className="!bg-transparent hover:!bg-slate-50 !text-gray-600 !cursor-pointer"
      >
        <BookmarkIcon width="24" height="24" />
      </IconButton>
      <IconButton
        size="3"
        className="!bg-transparent hover:!bg-slate-50 !text-gray-600 !cursor-pointer"
      >
        <CubeIcon width="24" height="24" />
      </IconButton>
      <IconButton
        size="3"
        className="!bg-transparent hover:!bg-slate-50 !text-gray-600 !cursor-pointer"
      >
        <EnvelopeClosedIcon width="24" height="24" />
      </IconButton>
      <IconButton
        size="3"
        className="!bg-transparent hover:!bg-slate-50 !text-gray-600 !cursor-pointer"
      >
        <ImageIcon width="24" height="24" />
      </IconButton>
      <IconButton
        size="3"
        className="!bg-transparent hover:!bg-slate-50 !text-gray-600 !cursor-pointer"
      >
        <CalendarIcon width="24" height="24" />
      </IconButton>
      <IconButton
        size="3"
        className="!bg-transparent hover:!bg-slate-50 !text-gray-600 !cursor-pointer"
      >
        <GearIcon width="24" height="24" />
      </IconButton>
    </Box>
  );
}

export default Sidebar;
