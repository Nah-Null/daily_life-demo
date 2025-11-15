import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Reg from '../components/Register'
import Port from '../components/Create'
import Promotion from '../components/promotion'

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/Register" element={<Reg />} />
            <Route path="/Create" element={<Port/>} />
            <Route path="/Promotion" element={<Promotion/>} />
        </Routes>
    )
}
export default AppRoute
