import './css/navbar.css'
import Button from './ButtonHover1';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate();
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
                                <a className="nav-link active" aria-current="page" href="/*">หน้าหลัก</a>
                            </li>
                            <li className="nav-item" style={{paddingRight:'2rem'}}>
                                <div onClick={() => navigate('/Create')}>
                                <Button text="สร้างแฟ้มของคุณ" />
                            </div>
                            </li>
                            <li className="nav-item" style={{paddingRight:'2rem'}}>
                                <a className="nav-link" href="Promotion">อัพเกรด</a>
                            </li>
                            <li className="nav-item" style={{paddingRight:'2rem'}}>
                                <a className="nav-link" href="Register">สมัครสมาชิก/เข้าสู่ระบบ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
