
export default function DayResults() {
    return (
        <div
            className="flex justify-between items-center w-11/12 mx-auto border border-white rounded-2xl py-3 px-2 mb-5">
            <div className={'flex justify-start items-center w-5/12 gap-x-2'}>
                <div className={'flex flex-col items-center justify-center text-[6px] text-center'}>
                    <span className={''}>17 Gole</span>
                    <span>-2</span>
                </div>
                <span className={'text-sm'}>Mehdi</span>
                <span className={'inline-flex animate-pulse'}>2</span>
            </div>
            <div className={'flex flex-col justify-center items-center w-2/12'}>
                <small className={'text-[8px]'}>Draw</small>
                <small className={'text-lg inline-flex animate-pulse'}>0</small>
            </div>
            <div className={'flex flex-row-reverse justify-start items-center w-5/12 gap-x-2'}>
                <div className={'flex flex-col items-center justify-center text-[6px] text-center'}>
                    <span className={''}>19 Gole</span>
                    <span>+2</span>
                </div>
                <span className={'text-sm'}>Nima</span>
                <span className={'inline-flex animate-pulse'}>1</span>
            </div>
        </div>
    );
}
