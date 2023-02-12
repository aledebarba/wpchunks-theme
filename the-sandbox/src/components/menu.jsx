import { useState } from 'react';
import { Link } from 'react-router-dom';
import { _app } from '../wpchunk';
import { ReactComponent as Brand } from '../pages/assets/brand-symbol.svg';
import { Icon } from "@iconify/react"

export const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }   

    const isMobile = () => {
        return window.innerWidth < 768;
    }   

    console.log( _app.primaryMenu() )

    return (
        <>
        <div className="fixed h-16 w-16 right-4 top-4 flex items-center cursor-pointer justify-center border-black text-black rounded-full bg-red z-10 font-serif font-bold">
            <div onClick={ handleToggle }>Menu</div>
        </div>
        <div className="fixed top-0 left-0 w-screen h-10 flex justify-end pr-4 z-10">
            <div className="menu--button" onClick={handleToggle} >
              <MenuDesktop isOpen={isOpen}  handleClose={handleToggle}/>
            </div>            
        </div>
        </>
    )
}

const MenuDesktop = ({ isOpen, handleClose }) => { 
    return (
        <>
            <div
                className={`absolute w-screen h-screen m-0 p-0 top-0 ${
                    isOpen ? " left-0 " : " left-full "
                } bg-red grid grid-cols-[5vw_auto_5vw_10vw] grid-rows-1 transition-all duration-500 ease-in-out`}>
                <div className="mt-16 p-2">
                    <Brand />
                </div>
                <div className="flex flex-col justify-start mt-16 gap-8 ml-16">
                    {_app.primaryMenu().map((item, index) => (
                        <div key={index}>
                            <div className="text-black font-serif font-extralight inline-block hover:font-display text-6xl border-b-0 transition-all duration-300 hover:scale-125 origin-top-left hover:border-b-1 hover:border-b-1">
                                <Link to={item.target || "/"}>
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-0 flex flex-col justify-between border-l-black border-r-black border border-t-0 border-b-0 align-middle">
                    <div class="relative w-full py-6 rounded-full border flex justify-center items-center text-center p-5 font-serif font-bold hover:text-white hover:bg-black transition-all duration-300">
                        Close
                    </div>
                    <div className="flex flex-col gap-10 py-8 border-black border rounded-t-full rounded-b-full items-center justify-center">
                        <div className="instagram">
                            <Icon
                                className="text-2xl cursor-pointer hover:text-white transition-all duration-300 "
                                icon="mdi:instagram"
                            />
                        </div>
                        <div className="email">
                            <Icon
                                className="text-2xl cursor-pointer hover:text-white transition-all duration-300 "
                                icon="mdi:mail"
                            />
                        </div>
                        <div className="conspira">
                            <Icon
                                className="text-2xl cursor-pointer hover:text-white transition-all duration-300 "
                                icon="mdi:copyright"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const MenuMobile = () => MenuDesktop();

