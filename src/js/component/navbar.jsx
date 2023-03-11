import React from "react";

function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg bg-dark p-2">
            <div class="container-fluid">
                <a class="navbar-brand text-secondary" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-secondary" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;