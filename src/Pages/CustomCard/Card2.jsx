import React from 'react'
import { Link, useParams } from 'react-router-dom';
import users from '../../Data';
import './Card2.scss';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ModuleComponent from '../../components/ModuleComponent/ModuleComponent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Fab } from '@mui/material';

const Card2 = ({ handleSnackbarOpen }) => {
    const { id } = useParams();
    const userData = users.find(user => user.id === parseInt(id));

    if (!userData) {
        return <div>User not found</div>;
    }
    const { params, modules } = userData;
    const [pickedItem, setPickedItem] = React.useState('1');

    const handleChange = (event, newPicked) => {
        setPickedItem(newPicked);
    };
    return (
        <div style={{ display: 'flex', maxWidth: '790px', margin: 'auto', alignItems: 'flex-start' }}>
            <Link to={`/`}>
                <Fab color="primary" className='' style={{
                    marginTop: '25px'
                }}>
                    <ArrowBackIosNewIcon />
                </Fab>
            </Link>
            <div style={{ display: 'flex', maxWidth: '700px', margin: 'auto', marginTop: '25px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={pickedItem}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Основная информация" value="1" />
                                <Tab label="Образование" value="2" />
                                <Tab label="Карьера" value="3" />
                                <Tab label="Семья" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ModuleComponent data={params} handleSnackbarOpen={handleSnackbarOpen} />
                        </TabPanel>
                        <TabPanel value="2">
                            <ModuleComponent data={modules.education} handleSnackbarOpen={handleSnackbarOpen} />
                        </TabPanel>
                        <TabPanel value="3">
                            <ModuleComponent data={modules.career} handleSnackbarOpen={handleSnackbarOpen} />
                        </TabPanel>
                        <TabPanel value="4">
                            <ModuleComponent data={modules.family} handleSnackbarOpen={handleSnackbarOpen} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}

export default Card2;