import { UserButton } from "@clerk/nextjs";
import Drawer from "./drawer";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div className="md:hidden">
        <Drawer />
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
