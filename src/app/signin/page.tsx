"use client";

import FormButton from "@/components/UI/Form/FormButton";
import FormInput from "@/components/UI/Form/FormInput";
import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

export default function Login() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  // const { pending } = useFormStatus();
  return (
    <main className="min-h-screen flex flex-col gap-[83px] justify-center items-center py-[78px] bg-DarkBlue ">
      <header>
        <Image src="/images/logo.svg" alt="logo" width={33} height={27}></Image>
      </header>
      <form className="w-[400px] flex flex-col gap-10 p-8 bg-SemiDarkBlue rounded-[20px]">
        <h1 className="text-xl3 text-White">Login</h1>
        <div className="flex flex-col gap-6">
          <FormInput type="text" placeholder="Email address"></FormInput>
          <FormInput type="password" placeholder="Password"></FormInput>
        </div>
        <div className="w-full flex flex-col gap-6 items-center">
          <FormButton>Login to your account</FormButton>
          <p className="text-base text-White">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-base text-Red">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
