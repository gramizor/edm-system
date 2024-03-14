import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../../Data';
import './Card.scss';
// import CustomCard from '../../components/CustomCard/CustomCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const Card = () => {
    const { id } = useParams();
    const userData = users.find(user => user.id === parseInt(id));

    if (!userData) {
        return <div>User not found</div>;
    }

    const { params, modules } = userData;
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='container'>

            {/* <Accordion>
                <CustomCard userId={id} moduleName="education" data={modules.education} />
            </Accordion>
            <Accordion>
                <CustomCard userId={id} moduleName="career" data={modules.career} />
            </Accordion>
            <Accordion>
                <CustomCard userId={id} moduleName="family" data={modules.family} />
            </Accordion> */}
            {/* <h2>User ID: {id}</h2> */}

            <Accordion
                elevation={16}
                expanded={expanded === 'panel1'}
                className='user-module'
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="module-panel"
                    className='user-title'
                >
                    <div>{params.title}</div>
                </AccordionSummary>
                <AccordionDetails>
                    {params && (
                        <div className='user-info'>
                            <ul>
                                {params.value.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.title}: </span>
                                        <TextField
                                            variant="standard"
                                            id="info-input"
                                            defaultValue={item.value}
                                            fullWidth sx={{ m: 1 }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={16}
                className='user-module'
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="module-panel"
                    className='user-title'
                >
                    <div>{modules.education.title}</div>
                </AccordionSummary>
                <AccordionDetails>
                    {modules.education && (
                        <div className='user-info'>
                            <ul>
                                {modules.education.value.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.title}: </span>
                                        <TextField
                                            variant="standard"
                                            id="info-input"
                                            defaultValue={item.value}
                                            fullWidth sx={{ m: 1 }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion
                elevation={16}
                className='user-module'
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="module-panel"
                    className='user-title'
                >
                    <div>{modules.career.title}</div>
                </AccordionSummary>
                <AccordionDetails>
                    {modules.career && modules.career.value && modules.career.value.length > 0 ? (
                        <div className='user-info'>
                            <ul>
                                {modules.career.value.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.title}: </span>
                                        <TextField
                                            variant="standard"
                                            id="info-input"
                                            defaultValue={item.value}
                                            fullWidth sx={{ m: 1 }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className='no-experience'>Нет опыта работы</div>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion
                className='user-module'
                elevation={16}
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="module-panel"
                    className='user-title'
                >
                    <div>{modules.family.title}</div>
                </AccordionSummary>
                <AccordionDetails>
                    {modules.family && (
                        <div className='user-info'>
                            <ul>
                                {modules.family.value.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.title}: </span>
                                        <TextField
                                            variant="standard"
                                            id="info-input"
                                            defaultValue={item.value}
                                            fullWidth sx={{ m: 1 }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
            <ButtonGroup
                className='button-group'
                variant="contained"
            >
                <Button
                    href={`/edm-system#`}
                >
                    Вернуться
                </Button>
                <Button
                    onClick={() => console.log('Запрос на обновление данных')}
                >
                    Обновить
                </Button>
                <Button
                    onClick={() => console.log('Запрос на изменение данных')}
                >
                    Сохранить
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Card;
