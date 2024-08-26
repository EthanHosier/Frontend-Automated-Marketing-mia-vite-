import { Avatar, AvatarFallback } from "@/components/avatar";
import { Button } from "@/components/button";
import { HStack } from "@/components/hstack";
import MiaLogo from "@/components/mia-logo";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
import { initials } from "@/lib/utils";
import { Bell, LayoutDashboard, LogOut, Settings, User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <LayoutDashboard className="size-[28px] md:size-5 flex-shrink-0" />,
      comingSoon: false,
    },
    {
      label: "Profile",
      href: "#",
      icon: <User className="size-[28px] md:size-5 flex-shrink-0" />,
      comingSoon: true,
    },
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="size-[28px] md:size-5 flex-shrink-0" />,
      comingSoon: true,
    },
    {
      label: "Logout",
      href: "#",
      icon: <LogOut className="size-[28px] md:size-5 flex-shrink-0" />,
      comingSoon: true,
    },
  ];

  return (
    <div className="bg-white h-screen flex flex-col">
      <HStack
        items="center"
        justify="between"
        padding={6}
        className="md:h-[100px] h-[76px] mb-2 flex-shrink-0"
      >
        <MiaLogo className="h-[58px] md:h-[64px]" />
        <Button variant={"outline"} size={"xl"} icon className="hidden md:flex">
          <Bell className="size-[16px]" />
        </Button>
        <HStack className="md:hidden" justify="end" gap={4}>
          <Button variant={"outline"} size={"md"} icon>
            <Bell className="size-[16px]" />
          </Button>
          <Link to="profile">
            <Avatar className="size-10 text-xs flex items-center justify-center flex-shrink-0">
              <AvatarFallback>{initials("Ethan Hosier")}</AvatarFallback>
            </Avatar>
          </Link>
        </HStack>
      </HStack>

      <div className="flex flex-1 overflow-hidden px-2 md:px-0">
        <Sidebar>
          <SidebarBody className="justify-between gap-10 h-full">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Ethan Hosier",
                  href: "#",
                  icon: (
                    <Avatar className="size-7 text-xs flex items-center justify-center flex-shrink-0">
                      <AvatarFallback>
                        {initials("Ethan Hosier")}
                      </AvatarFallback>
                    </Avatar>
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        <div className="w-full flex flex-col overflow-hidden">
          <div
            className="w-full flex-1 bg-grayscaleSurface-default rounded-lg md:rounded-none md:rounded-tl-[16px] overflow-auto py-[24px] md:pl-[64px]
          md:py-[48px] flex flex-col gap-[24px] md:gap-[64px]"
          >
            <Outlet />
          </div>
          <nav className="w-full h-[64px] bg-white rounded-lg md:rounded-none md:rounded-tr-[16px] md:hidden flex-shrink-0 my-2">
            <HStack
              items="center"
              justify="between"
              padding={4}
              className="h-full"
            >
              {links.map((link, idx) => (
                <Button key={idx} variant={"ghost"} size={"md"} icon>
                  {link.icon}
                </Button>
              ))}
            </HStack>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
