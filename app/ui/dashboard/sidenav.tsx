import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { Button, Box } from "@mui/material";

export default function SideNav() {
  return (
    <Box className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#710000] p-4 md:h-40"
        href="/"
      >
        <Box className="w-32 text-white md:w-40">
          <AcmeLogo />
        </Box>
      </Link>
      <Box className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <Box className="hidden h-auto w-full grow rounded-md bg-[#232323] md:block"></Box>
        <form>
          <Button
            type="submit"
            className="!text-white flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:!bg-[#b70202] hover:font-bold md:flex-none md:justify-start md:p-2 md:px-3 !bg-[#710000]"
          >
            <PowerIcon className="w-6" />
            <span className="hidden md:block">Sign Out</span>
          </Button>
        </form>
      </Box>
    </Box>
  );
}
