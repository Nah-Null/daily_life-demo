import Button from "./ButtonHover2"
import Nav  from "./Nav-bar"
const Reg = () => {
    return (
        <>
            <Nav />
            <div style={{textAlign: "center", marginTop: "50px", marginBottom: "20px"}}>
                <h1>Register Page</h1>
                <input type="text" placeholder="Fullname" style={{marginBottom: "20px"}} />
                <br />
                <input type="text" placeholder="Lastname" />
            </div>
            <Button text="Next"></Button>
        </>
    )
}
export default Reg