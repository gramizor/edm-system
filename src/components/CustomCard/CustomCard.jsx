import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CustomCard.scss'

function CustomCard({ data }) {
    return (
        <div className=''>
            <Accordion elevation={16}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="module-panel"
                >
                    <Typography>{data.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {data && (
                        <div>
                            <ul>
                                {data.value.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}: </strong>{item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CustomCard