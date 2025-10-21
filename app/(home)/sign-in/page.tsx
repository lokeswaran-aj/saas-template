import { SignInForm } from "@/components/signin-form";

export default function LoginPage() {
  return (
    <main className="container min-h-screen relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="w-full max-w-sm">
        <SignInForm />
      </div>
    </main>
  );
}
