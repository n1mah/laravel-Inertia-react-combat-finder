import { Head } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";
import DayBox from "@/Components/Result/DayBox";

export default function NewDay() {


    return (
        <MainLayout>
            <Head title="NewDay" />
            <div className={'w-full h-full flex flex-col justify-start items-center py-[120px] overflow-y-scroll text-white'}>

            </div>
        </MainLayout>
    );
}
