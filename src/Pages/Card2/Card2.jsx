import './Card2.scss';
import React from 'react'
import users from '../../Data';
import { Fab } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ModuleComponent from '../../components/ModuleComponent/ModuleComponent';

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
        <div className="card">
            <div className='card2-container'>
                <div className="fab">
                    <Link to={`/`}>
                        <Fab color="primary" style={{
                            marginTop: '25px'
                        }}>
                            <ArrowBackIosNewIcon />
                        </Fab>
                    </Link>
                </div>
                <div className='profile-info'>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={pickedItem}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                    variant="scrollable"
                                >
                                    <Tab label="Основная информация" value="1" />
                                    <Tab label="Образование" value="2" />
                                    <Tab label="Карьера" value="3" />
                                    <Tab label="Семья" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{ p: 1 }}>
                                <ModuleComponent data={params} handleSnackbarOpen={handleSnackbarOpen} />
                            </TabPanel>
                            <TabPanel value="2" sx={{ p: 1 }}>
                                <ModuleComponent data={modules.education} handleSnackbarOpen={handleSnackbarOpen} />
                            </TabPanel>
                            <TabPanel value="3" sx={{ p: 1 }}>
                                <ModuleComponent data={modules.career} handleSnackbarOpen={handleSnackbarOpen} />
                            </TabPanel>
                            <TabPanel value="4" sx={{ p: 1 }}>
                                <ModuleComponent data={modules.family} handleSnackbarOpen={handleSnackbarOpen} />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Card2;