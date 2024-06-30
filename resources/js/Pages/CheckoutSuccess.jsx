import React, {useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { router } from '@inertiajs/react'

export default function CheckoutSuccess() {

    useEffect(() => {
        setTimeout(() => {
            router.visit('/dashboard');
        }, 3000);
    }, []);

    return (
        <div className="bg-white border-2 flex justify-center items-center h-screen mx-auto">
            <div>
                <h1>Checkout Success</h1>
                <ClipLoader color="#123abc" loading={true}  size={50}/>
                <p>Redirecting to dashboard...</p>
            </div>
        </div>
    );
}
