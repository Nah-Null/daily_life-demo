import './css/navbar.css'
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top toothbox-navbar">
                <div className="container-fluid">
                    {/* โลโก้ */}
                    <img src="img/daily_life.png" alt="logo" style={{ width: '5rem' }} />

                    {/* ปุ่ม burger */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* เมนู */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{marginRight:'10rem'}}>
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{paddingRight:'2rem'}}>
                                <a className="nav-link active" aria-current="page" href="/*">Home</a>
                            </li>
                            <li className="nav-item" style={{paddingRight:'2rem'}}>
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item" style={{paddingRight:'2rem'}}>
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item" style={{paddingRight:'2rem'}}>
                                <a className="nav-link" href="/Register">Sign in / Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
