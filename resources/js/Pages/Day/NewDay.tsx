import { Head } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";
import DayBox from "@/Components/Result/DayBox";

export default function NewDay() {


    return (
        <MainLayout>
            <Head title="NewDay" />
            <div
                className={'w-full h-full flex flex-col justify-start items-center py-[120px] overflow-y-scroll text-white'}>
                <h1 className={'mt-6 mb-1 font-bold text-3xl'}>New Day</h1>
                <p className={'text-xs mb-6'}>new Event</p>
                <div className={'bg-white h-48 w-10/12 mx-auto rounded-3xl'}></div>
                <button className={'text-black bg-white mt-6 rounded-3xl w-10/12 mx-auto py-3 text-center '}>Start Day</button>
            </div>
        </MainLayout>
    );
}
