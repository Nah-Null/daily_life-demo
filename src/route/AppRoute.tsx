import { Routes, Route } from 'react-router-dom'
import App from '../App'
const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </>
    )
}
export default AppRoute