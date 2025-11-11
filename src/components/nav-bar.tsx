const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid d-flex flex-column">
                    {/* แถวแรก: Logo, Menu Button, Login/Sign In */}
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <img src="img/daily_life.png" style={{width:'10rem', marginLeft:'2rem'}}/>
                        <div className="d-flex align-items-center gap-4">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="d-flex gap-2" style={{marginRight: '3rem'}}>
                                <button className="btn btn-outline-success" type="button">Login</button>
                                <button className="btn btn-outline-success" type="button">Sign In</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Offcanvas สำหรับเมนู */}
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">Daily Life</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex justify-content-center" >
                            <ul className="navbar-nav text-center" style={{gap: '5rem'}}>
                                <li className="nav-item"><a className="nav-link" href="#home"><h2>Home</h2></a></li>
                                <li className="nav-item"><a className="nav-link" href="#home"><h2>About</h2></a></li>
                                <li className="nav-item"><a className="nav-link" href="#home"><h2>Features</h2></a></li>
                                <li className="nav-item"><a className="nav-link" href="#home"><h2>Contact</h2></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav
