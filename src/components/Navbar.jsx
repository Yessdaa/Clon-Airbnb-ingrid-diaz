import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {

    return (

        <nav>
            <div className="w-screen grid grid-cols-3 h-20 border-b-[1px] items-center fixed top-0 bg-white">
                <div className="pl-15">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" className="h-10 w-auto m-2" alt="Airbnb Logo" />
                </div>

                <div className="px-8">
                    <div className="flex items-center justify-evenly rounded-full shadow-md h-12 w-96 border">
                        <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">Anywhere</button>
                        <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">Any week</button>
                        <button className="border-gray-100 px-4 text-gray-500">Add guests</button>
                        <i className="fa-solid fa-magnifying-glass bg-red-500 text-white rounded-full p-2"></i>
                    </div>
                </div>

                <div className="flex justify-end items-center pr-4 sm:pr-8 md:pr-12 gap-4 sm:gap-8">
                    <NavLink className="text-sm font-medium hidden sm:inline-block" to={'/YourHome'}>Airbnb Your Home</NavLink>
                    <span className="material-symbols-outlined hidden sm:inline-block">language</span>
                    <div className="flex justify-evenly items-center py-1.25 pr-1.25 pl-3 gap-2 rounded-full shadow-md h-10 w-16 sm:w-20 border">
                        <i className="fa-solid fa-bars"></i>
                        <NavLink className="bg-gray text-gray rounded-full w-7 h-7 text-center pt-0.5 text-[10px] font-semibold" to={'/Form'}>
                            <AccountCircleIcon />
                        </NavLink>
                    </div>
                </div>

            </div>

            <div className="h-24 w-screen flex items-center space-x-5 fixed top-20 bg-white">
                <div className="flex items-center space-x-10 justify-center">
                    <div className="category pl-15">
                        <img src="static/type1.jpeg" className="hotel-img" alt="Type 1" />
                        <p className="category-text">Amazing pools</p>
                    </div>
                    <div className="category">
                        <img src="static/type2.jpeg" className="hotel-img" alt="Type 2" />
                        <p className="category-text">Play</p>
                    </div>
                    <div className="category">
                        <img src="static/type3.jpeg" className="hotel-img" alt="Type 3" />
                        <p className="category-text">Historical Homes</p>
                    </div>
                    <div className="category">
                        <img src="static/type4.jpeg" className="hotel-img" alt="Type 4" />
                        <p className="category-text">Countryside</p>
                    </div>
                    <div className="category">
                        <img src="static/type5.jpeg" className="hotel-img" alt="Type 5" />
                        <p className="category-text">Surfing</p>
                    </div>
                    <div className="category">
                        <img src="static/type6.jpeg" className="hotel-img" alt="Type 6" />
                        <p className="category-text">Farms</p>
                    </div>
                    <div className="category">
                        <img src="static/type8.jpeg" className="hotel-img" alt="Type 8" />
                        <p className="category-text">Rooms</p>
                    </div>
                    <div className="category">
                        <img src="static/type9.jpeg" className="hotel-img" alt="Type 9" />
                        <p className="category-text">Lakefront</p>
                    </div>
                    <div className="category">
                        <img src="static/type10.jpeg" className="hotel-img" alt="Type 10" />
                        <p className="category-text">Beachfront</p>
                    </div>
                    <div className="category">
                        <img src="static/type11.jpeg" className="hotel-img" alt="Type 11" />
                        <p className="category-text">OMG!</p>
                    </div>
                    <div className="category">
                        <img src="static/type12.jpeg" className="hotel-img" alt="Type 12" />
                        <p className="category-text">Golfing</p>
                    </div>
                </div>
                <span className="material-symbols-outlined pl-4">arrow_circle_right</span>
                <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border">
                    <span className="material-symbols-outlined pl-2">sync_alt</span>
                    <p className="text-xs font-medium pr-2">Filters</p>
                </div>
            </div>

        </nav>

    );
};

export default Navbar;
