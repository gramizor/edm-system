import React, { useEffect, useState } from 'react'
// import CustomTable from '../../components/CustomTable/CustomTable'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Pie from '../../components/Charts/Pie';
import Linear from '../../components/Charts/Linear';
import Stacking from '../../components/Charts/Stacking';
import './Home.scss'
import AgGridTable from '../../components/AgGridTable/AgGridTable';
import { Fab } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Home = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleUserSelect = (userId) => {
        setSelectedUserId(userId);
    };

    const [showButton, setShowButton] = useState(false);
    console.log(selectedUserId)
    useEffect(() => {
        if (selectedUserId !== null) {
            setShowButton(true);
        }
    }, [selectedUserId]);

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
            {showButton && (
                <Link to={selectedUserId !== null ? `user/${parseInt(selectedUserId)}` : '#'}>
                    <Fab color="primary" className='navigate-button animate-slide-right' style={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                    }}>
                        <ArrowForwardIosIcon />
                    </Fab>
                </Link>
            )}
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