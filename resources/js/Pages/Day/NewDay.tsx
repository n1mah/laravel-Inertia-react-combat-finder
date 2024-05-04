import { Head } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";

export default function NewDay() {


    return (
        <MainLayout>
            <Head title="NewDay" />
            <div
                className={'w-full h-full flex flex-col justify-start items-center py-[120px] overflow-y-scroll text-white'}>
                <h1 className={'mt-6 mb-1 font-bold text-3xl'}>New Day</h1>
                <p className={'text-xs mb-6'}>new Event</p>
                <div className={'flex items-center justify-start py-2 flex-col bg-white h-48 w-10/12 mx-auto rounded-3xl text-black'}>
                    <h2 className={'font-bold text-xl'}>Users</h2>
                    <p className={'text-[10px] text-center'}>Select User In Day Matches
                        <br/>
                        (with click)</p>
                    <div className={'flex flex-wrap justify-center items-start py-2 gap-1'}>
                        <div className={'bg-black text-white px-5 py-1.5 rounded-2xl'}>Nima</div>
                        <div className={'bg-black text-white px-5 py-1.5 rounded-2xl'}>Mehdi</div>
                    </div>
                </div>
                <button className={'text-black bg-white mt-6 rounded-3xl w-10/12 mx-auto py-3 text-center '}>Start Day</button>
            </div>
        </MainLayout>
    );
}
