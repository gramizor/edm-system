import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Pie from '../../components/Charts/Pie';
import Linear from '../../components/Charts/Linear';
import Stacking from '../../components/Charts/Stacking';

const Home = () => {
    return (
        <div>
            <div className="charts" style={{ display: "flex", margin: "20px", justifyContent: "center", alignItems: "center" }}>
                <Pie />
                <Linear />
                <Stacking />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomTable />
            </LocalizationProvider>
        </div>
    )
}

export default Home