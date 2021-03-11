import React, { useState } from "react";
import GoogleLogo from "../../assets/google-logo.svg";
import Icon from "../../layouts/Icon";
import { mdiMenu } from "@mdi/js";

const Navbar: React.FunctionComponent = () => {
    const [login, setLogin] = useState(true);

    return <header className="sticky top-0 h-16 flex flex-row items-center px-2 bg-gray-50">
        <div className="flex flex-row items-center">
            {login &&
                <button className="p-1 rounded-full focus:outline-none hover:bg-gray-200">
                    <Icon className="h-8 w-8" mdi={mdiMenu} />
                </button>
            }

            <div className="ml-2 text-xl md:text-2xl">
                <span>Laboratorio&nbsp;</span>

                <span className="font-medium">Moncada</span>
            </div>
        </div>

        <div className="flex-grow"></div>

        <div className="flex flex-row space-x-2 items-center mr-2 md:mr-4">
            {login ?
                <>
                    <button className="btn btn-primary p-0">
                        <img className="h-8 w-8 rounded-full" src="https://picsum.photos/300/300" alt="User" />
                    </button>
                </> :
                <>
                    <button className="btn btn-primary btn-outline flex flex-row p-1 md:px-4 md:py-2">
                        <img className="h-8 w-8 md:h-6 md:w-6" src={GoogleLogo} alt="Sign in" />
                        <span className="ml-2 hidden md:block">Inicia sesión con Google</span>
                    </button>
                </>}
        </div>
    </header>
}

export default Navbar;