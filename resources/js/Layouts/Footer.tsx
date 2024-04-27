import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';
import {Link} from "@inertiajs/react";

export default forwardRef(function Footer(
    { }:{ },
) {


    return (
        <footer className={'flex justify-center items-center w-full bg-white border-2 absolute bottom-0 h-[120px] sm:h-[15svh] rounded-t-[7svh]'}>
            <ul className={'flex w-full h-full justify-center items-center gap-x-2'}>
                <li className={'flex justify-center items-center rounded-xl text-center w-2/12 h-3/5 sm:h-4/5 border-2 border-black'}>
                    <Link href={'/'} className={'h-full w-full flex justify-center items-center text-center hover:bg-black hover:text-white rounded-xl'}>
                        Home
                    </Link>
                </li>
                <li className={'flex justify-center items-center rounded-xl text-center w-2/12 h-3/5 sm:h-4/5 border-2 border-black'}>
                    <Link href={'/new'} className={'h-full w-full flex justify-center items-center text-center hover:bg-black hover:text-white rounded-xl'}>
                        New
                    </Link>
                </li>
                <li className={'flex justify-center items-center rounded-xl text-center w-2/12 h-3/5 sm:h-4/5 border-2 border-black'}>
                    <Link href={''} className={'h-full w-full flex justify-center items-center text-center hover:bg-black hover:text-white rounded-xl'}>
                        Result
                    </Link>
                </li>
                <li className={'flex justify-center items-center rounded-xl text-center w-2/12 h-3/5 sm:h-4/5 border-2 border-black'}>
                    <Link href={''} className={'h-full w-full flex justify-center items-center text-center hover:bg-black hover:text-white rounded-xl'}>
                        profile
                    </Link>
                </li>
            </ul>
        </footer>
    );
});
