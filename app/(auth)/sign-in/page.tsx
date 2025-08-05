import { auth } from "@/auth";
import Logo from "@/common/Logo";
import CredentialSigninForm from "@/components/auth/credentials-signin-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadate: Metadata = {
  title: "Sign In",
};

const SignInPage = async (prosp: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await prosp.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Logo />
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Form Here */}
          <CredentialSigninForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
