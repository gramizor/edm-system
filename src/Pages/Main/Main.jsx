import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Main = () => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomTable />
            </LocalizationProvider>
        </div>
    )
}

export default Main