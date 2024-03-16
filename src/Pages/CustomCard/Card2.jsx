import React from 'react'
import { useParams } from 'react-router-dom';
import users from '../../Data';
import './Card2.scss';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ModuleComponent from '../../components/ModuleComponent/ModuleComponent';

const Card2 = () => {
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
        <div>
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
                        <ModuleComponent data={params} />
                    </TabPanel>
                    <TabPanel value="2">
                        <ModuleComponent data={modules.education} />
                    </TabPanel>
                    <TabPanel value="3">
                        <ModuleComponent data={modules.career} />
                    </TabPanel>
                    <TabPanel value="4">
                        <ModuleComponent data={modules.family} />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default Card2;