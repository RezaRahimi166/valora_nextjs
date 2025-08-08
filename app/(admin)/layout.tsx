import Menu from "@/common/header/menu";
import Logo from "@/common/Logo";
import MainAdminNav from "@/components/(admin)/nav/main-nav";
import { Input } from "@/components/ui/input";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b container mx-auto">
          <div className="flex items-center h-16 px-4">
            <Logo width={44} />
            {/* Main Nav */}
            <MainAdminNav className="mx-6" />
            <div className="ml-auto items-center flex space-x-4">
              <div>
                <Input
                  type="search"
                  placeholder="Search..."
                  className="md:w-[100px] lg:w-[300px]"
                />
              </div>
              <Menu />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 container mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
