import React, { useState } from 'react'
// import CustomTable from '../../components/CustomTable/CustomTable'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Pie from '../../components/Charts/Pie';
import Linear from '../../components/Charts/Linear';
import Stacking from '../../components/Charts/Stacking';
import './Home.scss'
import users from '../../Data';
import AgGridTable from '../../components/AgGridTable/AgGridTable';
import { Fab } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleUserSelect = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <div className='home'>
            <div className="charts">
                <Pie />
                <Linear />
                <Stacking />
            </div>
            <div>
                <AgGridTable userSelected={handleUserSelect} />
            </div>

            <Fab color="primary" className='navigate-button' onClick={() => console.log(selectedUserId)}>
                <ArrowForwardIosIcon />
            </Fab>
        </div>
    )
}

export default Home

{/* {selectedUserId && (
    <Link to={`user/${parseInt(selectedUserId) + 1}`}>
        <ArrowForwardIosIcon />
    </Link>
)} */}
{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div style={{ padding: "20px" }}>
        <CustomTable />
    </div>
</LocalizationProvider> */}