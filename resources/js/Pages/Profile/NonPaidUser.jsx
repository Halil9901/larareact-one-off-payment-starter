import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {Head, Link} from '@inertiajs/react';
import Guest from "@/Layouts/GuestLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import {Button, Checkbox, TextInput} from "flowbite-react";
import InputError from "@/Components/InputError.jsx";
import {HiShoppingCart} from "react-icons/hi";

export default function Edit({auth, mustVerifyEmail, status, url}) {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                         alt="logo"/>
                    LOGO
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Hey{' '}
                            <Link href={route('profile.edit')} className="underline">{auth.user.name}</Link>,
                        </h1>
                        <p>Something went wrong. Please pay to access the platform.</p>

                        <a href={url} className="flex flex-col items-center justify-end mt-4">
                            <Button className=" w-full">
                                <HiShoppingCart className="mr-2 h-5 w-5"/>
                                £38 Pay now
                            </Button>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}
