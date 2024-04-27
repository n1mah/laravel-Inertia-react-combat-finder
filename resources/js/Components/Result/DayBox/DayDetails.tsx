import {Fragment} from "react";

export default function DayDetails() {
    return (
        <div className={'flex flex-col w-full'}>
            <div className={'flex justify-between items-center text-white py-4 border-t border-white mt-2'}>
                <h3 className={'text-2xl '}>Day 2</h3>
                <div className={'flex flex-col justify-between items-end text-right text-xs '}>
                    <span>14:20  -  2024/04/24</span>
                    <span><span className={'inline-flex animate-bounce'}>3</span> Match</span>
                </div>
            </div>
            <div
                className={'flex justify-between items-center text-white py-4 border-t border-dashed border-white mb-2 text-xs'}>
                <h4>SheetCup : <span className={'inline-flex animate-bounce'}>Nima</span></h4>
                <h4>WinnerDay : <span className={'inline-flex animate-bounce'}>Mehdi</span></h4>
            </div>
        </div>
    );
}
