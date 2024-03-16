import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import './ModuleComponent.scss'
const ModuleComponent = ({ data, handleSnackbarOpen }) => {
    const [editableIndex, setEditableIndex] = useState(null);
    const [editedValue, setEditedValue] = useState({});

    const handleEditClick = (index) => {
        setEditableIndex(index);
        setEditedValue({ ...data.value[index] });
    };

    const handleDoneClick = () => {
        console.log("Изменения сохранены в консоли:", editedValue);
        handleSnackbarOpen('success', 'Изменения сохранены в консоли');
        setEditableIndex(null);
    };

    const handleCloseClick = () => {
        handleSnackbarOpen('warning', 'Изменения отклонены');
        setEditableIndex(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValue({ ...editedValue, [name]: value });
    };

    return (
        <div>
            <table className='table-module'>
                <colgroup>
                    <col />
                    <col />
                </colgroup>
                <tbody>
                    {data.value.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <strong>{item.title}</strong>
                            </td>
                            <td>
                                {editableIndex === index ? (
                                    <div className='editable-row'>
                                        <button onClick={handleDoneClick}>
                                            <DoneIcon fontSize='small' />
                                        </button>
                                        <button onClick={handleCloseClick}>
                                            <CloseIcon fontSize='small' />
                                        </button>
                                        {item.type === 'text' ? (
                                            <input
                                                type="text"
                                                name="value"
                                                value={editedValue.value || ''}
                                                onChange={handleInputChange}
                                            />
                                        ) : item.type === 'dropList' ? (
                                            <select
                                                name="value"
                                                value={editedValue.value || ''}
                                                onChange={handleInputChange}
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
                                        <button onClick={() => handleEditClick(index)}>
                                            <EditIcon fontSize='small' />
                                        </button>
                                        {item.value}
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                    {(data.title === 'Образование' && data.value.length === 0) && (
                        <tr>
                            <td colSpan="2">
                                Нет высшего образования
                            </td>
                        </tr>
                    )}
                    {(data.title === 'Карьера' && data.value.length === 0) && (
                        <tr>
                            <td colSpan="2">
                                Нет опыта работы
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ModuleComponent;