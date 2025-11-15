import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Reg from '../components/Register'

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/Register" element={<Reg />} />
        </Routes>
    )
}
export default AppRoute
