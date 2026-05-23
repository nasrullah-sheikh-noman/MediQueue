import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { BsGithub, BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <div className="mt-22 container flex justify-center mx-auto p-4 m-8 items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardContent className="flex flex-col text-center justify-center space-y-2 my-3">
            <CardTitle className="text-2xl font-bold ">Login to your account</CardTitle>
            <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
         </CardContent>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mediqueue@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/register"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline border-b-2"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 ">
          <Button type="submit" className="w-full cursor-pointer">
            Login
          </Button>
          <Button variant="outline" className="w-full cursor-pointer mt-3">
            <span><BsGoogle/></span>
            Login with Google
          </Button>
          <Button variant="outline" className="w-full cursor-pointer">
            <span><BsGithub/></span>
            Login with Github
          </Button>
          <CardContent className={"flex gap-1 my-3"}>
            <div>
              Don't Have An Account? 
            </div>
            <CardAction>
              <Link href={"/register"} className="border-b-2 text-red-600" variant="link">Register</Link>
            </CardAction>
          </CardContent>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
