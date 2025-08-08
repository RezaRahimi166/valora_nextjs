import Menu from "@/common/header/menu";
import Logo from "@/common/Logo";
import MainNav from "@/components/(user)/nav/main-nav";

export default function MainLayout({
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
            <MainNav className="mx-6" />
            <div className="ml-auto items-center flex space-x-4">
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
