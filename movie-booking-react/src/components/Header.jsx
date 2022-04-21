/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

function Header({ search, setSearch, sortOrder, setSortOrder, type, setType }) {
    const [scroll, setScroll] = useState(false);

    // Scrolling Behaviiour
    useEffect(() => {
        window.addEventListener("scroll", function () {
            let scrollpos = window.scrollY;
            let windowWidth = window.innerWidth;
            if (scrollpos > 100 && windowWidth > 992) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    });

    return (
        <header className={scroll ? "header-flex" : ""}>
            <div className="logo">
                <img src={Logo} alt="Logo" width="350" height="75" />
            </div>
            <nav className="navbar">
                <ul type="none" className="nav-list">
                    <li>
                        <button
                            className={`nav-link ${
                                type === "All" ? "active" : ""
                            }`}
                            onClick={() => setType("All")}
                        >
                            All
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${
                                type === "Reality" ? "active" : ""
                            }`}
                            onClick={() => setType("Reality")}
                        >
                            Reality
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${
                                type === "Scripted" ? "active" : ""
                            }`}
                            onClick={() => setType("Scripted")}
                        >
                            Scripted
                        </button>
                    </li>
                </ul>
                <div className="nav-link hamburger-icon">&#9776;</div>
                <div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search"
                        placeholder="Search Movies..."
                    />
                    <select
                        className="sort"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="ascending">A - Z</option>
                        <option value="descending">Z - A</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}

export default Header;
