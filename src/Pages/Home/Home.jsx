import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Pie from '../../components/Charts/Pie';
import Linear from '../../components/Charts/Linear';
import Stacking from '../../components/Charts/Stacking';
import './Home.scss'

const Home = () => {
    return (
        <div>
            <div className="charts">
                <Pie />
                <Linear />
                <Stacking />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div style={{ padding: "20px" }}>
                    <CustomTable />
                </div>
            </LocalizationProvider>
        </div>
    )
}

export default Home