import './css/main.css'
const Main = () => {
    return (
        <>
            <h2 style={{ marginRight: '55rem', marginTop: '5rem' }}>Daily Life</h2>
            <br />
            <div className='inp'>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=" 🔍 ค้นหามหาวิทยาลัย"
                            aria-label="First name" />
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder=" 🔍 ค้นหาคณะวิชาสาขา"
                        aria-label="First name" />
                </div>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                {/* จุดแสดง indicator */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* เนื้อหาในแต่ละสไลด์ */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/handshake-close-up-executives.jpg" className="d-block w-100" alt="First Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/cheerful-group-young-students-sitting-studying.jpg" className="d-block w-100" alt="Second Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/11177.jpg" className="d-block w-50" alt="Third Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>

                {/* ปุ่มเลื่อนซ้าย */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                {/* ปุ่มเลื่อนขวา */}
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
export default Main