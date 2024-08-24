import { Route, Routes } from 'react-router-dom'
import EventListPage from './pages/EventListPage'

const router = () => {
    return (
        <Routes>
            <Route path="/event-list" element={<EventListPage />} />
        </Routes>
    )
}

export default router