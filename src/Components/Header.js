import { NavLink } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="bg-black">
                <div className="container flex justify-between py-2 sticky top-0">

                    <div className="flex">
                        <NavLink className="flex p-5 " to="/">
                            <h1>Ritesh Kumar</h1>
                        </NavLink>
                        <ul className="flex ">
                            <NavLink className="flex p-5 " to="/about">
                                <li>About</li>
                            </NavLink>
                            <NavLink className="flex p-5" to="/skills">
                                <li>Skills</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="">
                        <NavLink className="flex p-5" to="/login">
                            <span>Contact Me</span>
                        </NavLink>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;
