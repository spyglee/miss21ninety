import checkToken from "@/helpers/checkToken"
import { GetServerSidePropsContext } from "next"
import '../../app/globals.css'

export default function Page() {
  return (
    <div>
      <h1>Discover</h1>
    </div>
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