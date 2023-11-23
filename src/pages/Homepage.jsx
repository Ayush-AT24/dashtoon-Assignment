import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";


export default function HomePage() {

    function onClick() {
        window.location = "/comic-strip";
    }

    return (
        <>
            <div class="min-h-screen">
                <div class="row-span-1 h-[10%]">
                    <Navbar />
                </div>
                <div class="md:flex">
                    <div class="md:w-1/2 p-4 my-auto">
                        <div class="mt-40 inline-block">
                            <p className="text-gray-300 mx-2 text-5xl font-bubblegum tracking-wide font-extrabold md:text-left lg:text-8xl md:text-12xl">
                                Go Beyond, Plus Ultra !!!
                            </p>
                        </div>
                        <div class="text-xl md:text-left mx-2 font-bubblegum text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3 lg:text-4xl md:text-2xl">
                            <Typewriter
                                options={{
                                    strings: [
                                        // "Go Beyond !!",
                                        // "Plus Ultra !!!",
                                        "Make Your Own Comic !!!!"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>
                    </div>
                    {/* <img src="/logo.png" class="w-1/2 md:mx-4 mx-auto" /> */}
                </div>
                <div>
                    <div class="mx-5 mt-24 mb-8 text-3xl font-bubblegum text-white">
                        Click below to start making your own comic strip !!
                    </div>
                    
                    <button onClick={onClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Boom
                        </span>
                    </button>
                    
                </div>
            </div>
        </>
    );
}