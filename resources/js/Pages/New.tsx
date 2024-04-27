import {Head, Link} from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";
import DayBox from "@/Components/Result/DayBox";

export default function New() {


    return (
        <MainLayout>
            <Head title="NewDay" />
            <div className={'w-full h-full flex flex-col justify-start items-center py-[120px] overflow-y-scroll text-white'}>
                <nav className={'flex w-9/12 mx-auto gap-x-5 my-6'}>
                    <Link href={''} className={'flex w-4/12 h-20 justify-center rounded-xl text-black text-center items-center bg-white border-white border-dashed p-2'}>New Day</Link>
                    <Link href={''} className={'flex w-4/12 h-20 justify-center rounded-xl text-black text-center items-center bg-white border-white border-dashed p-2'}>New Match</Link>
                    <Link href={''} className={'flex w-4/12 h-20 justify-center rounded-xl text-black text-center items-center bg-white border-white border-dashed p-2'}>Restart Match</Link>
                </nav>
            </div>
        </MainLayout>
    );
}
