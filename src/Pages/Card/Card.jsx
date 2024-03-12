import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../../Data';
import './Card.scss';
// import CustomCard from '../../components/CustomCard/CustomCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Card = () => {
    const { id } = useParams();
    const userData = users.find(user => user.id === parseInt(id));

    if (!userData) {
        return <div>User not found</div>;
    }

    const { params, modules } = userData;

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
                defaultExpanded
                className='user-module'

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
                                        <span>{item.title}: </span>{item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={16}
                className='user-module'
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
                                        <span>{item.title}: </span>{item.value}
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
                    {modules.career && (
                        <div className='user-info'>
                            <ul>
                                {modules.career.value.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.title}: </span>{item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion
                className='user-module'
                elevation={16}
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
                                        <span>{item.title}: </span>{item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Card;
