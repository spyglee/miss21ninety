import { Settings, Video, List, Users, Utensils } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar"
import Image from "next/image"
import logo from '../../../public/MISS21ninety_logo-1.png'

const items = [
  {
    title: "Videos",
    url: "/discover/videos",
    icon: Video,
  },
  {
    title: "Programs",
    url: "/discover/programs",
    icon: List,
  },
  {
    title: "Recipes",
    url: "/discover/recipes",
    icon: Utensils,
  },
  {
    title: "Users",
    url: "/discover/users",
    icon: Users,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image className='w-[50%] max-w-[120px] m-8' src={logo} alt="logo" />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-8">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
