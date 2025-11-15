import Button from "./ButtonHover2"
import Input1 from "./Input1"
import Nav  from "./Nav-bar"
const Reg = () => {
    return (
        <>
            <Nav />
            <div style={{textAlign: "center", marginTop: "50px", marginBottom: "20px"}}>
                <h1 style={{marginBottom: "40px"}}>Register Page</h1>
                <Input1 text="Firstname" />
                <br />
                <Input1 text='Lastname'></Input1>
            </div>
            <Button text="Next"></Button>
        </>
    )
}
export default Reg