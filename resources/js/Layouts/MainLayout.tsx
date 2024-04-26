import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <div className={'flex justify-center items-center min-h-[100svh] bg-white sm:bg-black'}>
            <div className={'relative h-[680px] w-[360px] bg-black rounded-xl sm:w-full sm:h-[100svh]'}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}
