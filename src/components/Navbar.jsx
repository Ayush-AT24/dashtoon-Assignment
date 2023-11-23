import { Link, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { onSubmitClick } from "../redux/comicPanelSlice";
import { ToastContainer } from "react-toastify";

export default function Navbar() {
    return <>
        <ToastContainer />
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="logo.png" class="h-16" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PANELPLAY</span>
                </a>
                <div class="block w-auto" id="navbar-default">
                    <ul class="font-medium flex p-2 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-gray-900 dark:border-gray-900">
                        <li>
                            <Link to="/" class="block py-2 px-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
            
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>;
}