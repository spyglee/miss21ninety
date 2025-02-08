import checkToken from "@/helpers/checkToken"
import { GetServerSidePropsContext } from "next"
import '../../app/globals.css'
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/ui/appSidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <h1>Discover</h1>
      </main>
    </SidebarProvider>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const token = context?.req?.cookies?.token
  const user = await checkToken(token ?? '')
  if (!user) {
    return {
      redirect: { destination: '/' }
    }
  }
  return {
    props: {}
  }
}