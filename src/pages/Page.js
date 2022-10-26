import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./Home"
import NewsPage from "./News"
import ContractPage from "./Contract"

function Page({ styles }) {

    return (

        <div
            style={{ ...styles }}
        >
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
            <li>
                <Link to="/contract">Contract</Link>
            </li>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contract" element={<ContractPage />} />
            </Routes>
        </div>
    )
}

export default Page