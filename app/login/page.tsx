import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="mt-10 flex min-h-[100%] items-center justify-center content-center md:h-screen">
      <div className="rounded-lg relative mx-auto flex items-center justify-center content-center w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-[#710000] p-3 md:h-36">
          <div className="w-32 text-[#D9D9D9] md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}