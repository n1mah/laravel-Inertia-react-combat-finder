export default function DayBox() {
    return (
        <div className={`w-10/12 mx-auto my-2`}>
            <div className={'flex justify-between items-center text-white py-4 border-t border-white my-2'}>
                <h3 className={'text-2xl '}>Day 2</h3>
                <div className={'flex flex-col justify-between items-end text-right text-sm'}>
                    <span>14:20  -  2024/04/24</span>
                    <span>3 Match</span>
                </div>
            </div>
            <div className={'flex justify-between items-center text-white py-4 border-t border-dashed border-white my-2 text-xs'}>
                <h4>SheetCup : Nima</h4>
                <h4>WinnerDay : Mehdi</h4>
            </div>
            <div className="flex justify-between items-center w-11/12 mx-auto border border-white rounded-2xl py-3 px-2 mb-5">
                <div className={'flex justify-start items-center w-5/12 gap-x-2'}>
                    <div className={'flex flex-col items-center justify-center text-[6px] text-center'}>
                        <span className={''}>17 Gole</span>
                        <span>-2</span>
                    </div>
                    <span className={'text-sm'}>Mehdi</span>
                    <span>2</span>
                </div>
                <div className={'flex flex-col justify-center items-center w-2/12'}>
                    <small>Draw</small>
                    <small>0</small>
                </div>
                <div className={'flex flex-row-reverse justify-start items-center w-5/12 gap-x-2'}>
                    <div className={'flex flex-col items-center justify-center text-[6px] text-center'}>
                        <span className={''}>19 Gole</span>
                        <span>+2</span>
                    </div>
                    <span className={'text-sm'}>Nima</span>
                    <span>1</span>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white text-black w-full rounded-2xl py-4 px-2 my-2">
                <div className={'flex items-center justify-center flex-col w-[40%]'}>
                    <img className="block h-10 w-auto m-auto" src="/images/real-madrid.png" alt="Logo"/>
                    <span>Mehdi</span>
                </div>
                <div className={'flex items-center justify-center w-[20%] text-xl font-bold'}>3-9</div>
                <div className={'flex items-center justify-center flex-col w-[40%]'}>
                    <img className="block h-10 w-auto m-auto" src="/images/liverpool.png" alt="Logo"/>
                    <span>Nima</span>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white text-black w-full rounded-2xl py-4 px-2 my-1">
                <div className={'flex items-center justify-center flex-col w-[40%]'}>
                    <img className="block h-10 w-auto m-auto" src="/images/real-madrid.png" alt="Logo"/>
                    <span>Mehdi</span>
                </div>
                <div className={'flex items-center justify-center w-[20%] text-xl font-bold'}>10-7</div>
                <div className={'flex items-center justify-center flex-col w-[40%]'}>
                    <img className="block h-10 w-auto m-auto" src="/images/liverpool.png" alt="Logo"/>
                    <span>Nima</span>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white text-black w-full rounded-2xl py-4 px-2 my-2">
                <div className={'flex items-center justify-center flex-col w-[40%]'}>
                    <img className="block h-10 w-auto m-auto" src="/images/real-madrid.png" alt="Logo"/>
                    <span>Mehdi</span>
                </div>
                <div className={'flex items-center justify-center w-[20%] text-xl font-bold'}>4-3</div>
                <div className={'flex items-center justify-center flex-col w-[40%]'}>
                    <img className="block h-10 w-auto m-auto" src="/images/liverpool.png" alt="Logo"/>
                    <span>Nima</span>
                </div>
            </div>
        </div>
    );
}
