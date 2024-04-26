import FormButton from "@/components/UI/Form/FormButton";
import FormInput from "@/components/UI/Form/FormInput";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="min-h-screen flex flex-col gap-[83px] justify-center items-center py-[78px] bg-DarkBlue ">
      <header>
        <Image src="/images/logo.svg" alt="logo" width={33} height={27}></Image>
      </header>
      <form className="w-[400px] flex flex-col gap-10 p-8 bg-SemiDarkBlue rounded-[20px]">
        <h1 className="text-xl3 text-White">Sign Up</h1>
        <div className="flex flex-col gap-6">
          <FormInput type="text" placeholder="Email address"></FormInput>
          <FormInput type="password" placeholder="Password"></FormInput>
          <FormInput type="password" placeholder="Repeat password"></FormInput>
        </div>
        <div className="w-full flex flex-col gap-6 items-center">
          <FormButton>Create an account</FormButton>
          <p className="text-base text-White">
            Already have an account?{" "}
            <Link href="/login" className="text-base text-Red">
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
