import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const ModuleComponent = ({ data }) => {
    const [editableIndex, setEditableIndex] = useState(null);
    const [editedValue, setEditedValue] = useState({});

    const handleEditClick = (index) => {
        setEditableIndex(index);
        setEditedValue({ ...data.value[index] });
    };

    const handleDoneClick = () => {
        console.log("Changes saved to console:", editedValue);
        setEditableIndex(null);
    };

    const handleCloseClick = () => {
        console.log("Editing cancelled, changes discarded.");
        setEditableIndex(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValue({ ...editedValue, [name]: value });
    };

    return (
        <div>
            <table style={{ width: '100%', tableLayout: 'fixed' }}>
                <colgroup>
                    <col style={{ width: '150px' }} /> {/* Ширина первого столбца */}
                    <col style={{ width: '310px' }} /> {/* Ширина второго столбца */}
                </colgroup>
                <tbody>
                    {data.value.map((item, index) => (
                        <tr key={index}>
                            <td style={{ paddingRight: '20px', }}>
                                <strong>{item.title}</strong>
                            </td>
                            <td>
                                {editableIndex === index ? (
                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                                        <button onClick={handleDoneClick}><DoneIcon fontSize='small' /></button>
                                        <button onClick={handleCloseClick} style={{ paddingRight: '5px', alignContent: 'center' }}><CloseIcon fontSize='small' /></button>
                                        {item.type === 'text' ? (
                                            <input
                                                type="text"
                                                name="value"
                                                value={editedValue.value || ''}
                                                onChange={handleInputChange}
                                                style={{ width: '100%' }}
                                            />
                                        ) : item.type === 'dropList' ? (
                                            <select
                                                name="value"
                                                value={editedValue.value || ''}
                                                onChange={handleInputChange}
                                                style={{
                                                    width: "100%"
                                                }}
                                            >
                                                {item.variants.map((variant, index) => (
                                                    <option key={index} value={variant}>{variant}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            item.value
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => handleEditClick(index)} style={{ paddingRight: '5px' }}><EditIcon fontSize='small' /></button>
                                        {item.value}
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ModuleComponent;
