import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Home = () => {
  return (
    <main className="">
      <LoginLink postLoginRedirectURL="/dashboard"><Button>Sign in</Button></LoginLink>
      <RegisterLink postLoginRedirectURL="/welcome"><Button>Sign up</Button></RegisterLink>
    </main>
  )
}
export default Home;