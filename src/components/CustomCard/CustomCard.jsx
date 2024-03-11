import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CustomCard({ data }) {
    // console.log({ data })
    const renderValue = (value) => {
        if (Array.isArray(value)) {
            return (
                <ul>
                    {value.map((item, index) => (
                        <li key={index}>
                            {renderValue(item)}
                        </li>
                    ))}
                </ul>
            );
        } else if (typeof value === 'object') {
            return (
                <ul>
                    {Object.entries(value).map(([key, val]) => (
                        <li key={key}>
                            <strong>{key}: </strong>{renderValue(val)}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return value;
        }
    };
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="module-panel"
                >
                    <Typography>{data.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {data && (
                            <div>
                                {renderValue(data.value)}
                            </div>
                        )}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CustomCard