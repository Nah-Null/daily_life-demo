// main.tsx
import './css/main.css'
const Main = () => {
    return (
        <div className="container main-content-container"> {/* **เพิ่ม Container หลัก** */}
            <h2 className="main-title">Daily Life</h2> {/* **ใช้ Class แทน Inline Style** */}
            
            {/* **ส่วนค้นหา** */}
            <div className="row g-3 align-items-end mb-5"> {/* ใช้ g-3 สำหรับระยะห่าง, align-items-end จัดให้อยู่บรรทัดเดียวกัน */}
                <div className="col-12 col-md-5"> {/* 100% บนมือถือ, 5/12 บนจอใหญ่ */}
                    <input
                        type="text"
                        className="form-control main-input"
                        placeholder=" 🔍 ค้นหามหาวิทยาลัย"
                        aria-label="ค้นหามหาวิทยาลัย" />
                </div>
                <div className="col-12 col-md-5"> {/* 100% บนมือถือ, 5/12 บนจอใหญ่ */}
                    <input
                        type="text"
                        className="form-control main-input"
                        placeholder=" 🔍 ค้นหาคณะวิชาสาขา"
                        aria-label="ค้นหาคณะวิชาสาขา" />
                </div>
                <div className="col-12 col-md-2"> {/* 100% บนมือถือ, 2/12 บนจอใหญ่ */}
                    <button className="btn btn-primary w-100 search-button">ค้นหา 🔍</button> {/* **ใช้ปุ่ม Bootstrap** */}
                </div>
            </div>

            {/* **ส่วน Carousel** */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                
                {/* จุดแสดง indicator (Indicators) */}
                <div className="carousel-indicators">
                    {/*... (ไม่เปลี่ยนแปลง) ...*/}
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* เนื้อหาในแต่ละสไลด์ (Inner) */}
                <div className="carousel-inner custom-carousel-height"> {/* **เพิ่ม Class สำหรับความสูง** */}
                    {/*... (ไม่เปลี่ยนแปลงมากนัก, จัด Caption ใหม่) ...*/}
                    <div className="carousel-item active">
                        <img src="img/handshake-close-up-executives.jpg" className="d-block w-100 carousel-img" alt="First Slide" />
                        <div className="carousel-caption"> {/* ลบ d-md-block เพื่อให้แสดงบนมือถือด้วย */}
                            <h5 className='carousel-title'>Daily Life</h5>
                            <p className='carousel-text'>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    {/* ... Slide 2 และ 3 ที่คล้ายกัน ... */}
                    <div className="carousel-item">
                        <img src="img/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-brainstorming-meeting-ideas-mobile-application-software-design-project-modern-office-coworker-teamwork-concept.jpg" className="d-block w-100 carousel-img" alt="Second Slide" />
                        <div className="carousel-caption">
                            <h5 className='carousel-title'>Second slide label</h5>
                            <p className='carousel-text'>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/11177.jpg" className="d-block w-100 carousel-img" alt="Third Slide" />
                        <div className="carousel-caption">
                            <h5 className='carousel-title'>Third slide label</h5>
                            <p className='carousel-text'>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>

                {/* ปุ่มเลื่อนซ้าย/ขวา (Controls) */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='py-5'></div> {/* เพิ่ม padding ด้านล่าง */}
        </div>
    )
}
export default Main