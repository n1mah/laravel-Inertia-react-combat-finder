import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import MainLayout from "@/Layouts/MainLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <MainLayout>
            <Head title="Welcome" />
            <div className={'w-full h-full flex flex-col justify-start items-center py-[120px] overflow-y-scroll text-white'}>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>Hi</p>
                <p>by</p>
            </div>
        </MainLayout>
    );
}
