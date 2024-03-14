import { IconButton, Box, Divider } from '@mui/material'; // Add Divider import
import { Link } from 'react-router-dom';
import users, { cities } from '../../Data';
import { useMemo } from 'react';
import { MaterialReactTable, MRT_ActionMenuItem } from 'material-react-table'; // Add MRT_ActionMenuItem import
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CustomTable() {
    const columns = useMemo(
        () => [
            // {
            //     header: 'ID',
            //     accessorKey: 'id',
            //     filterVariant: 'text',
            // },
            {
                header: 'Full name',
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "ФИО").value),
                filterVariant: 'text',
            },
            {
                header: 'Phone number',
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "Номер телефона").value),
            },
            {
                header: 'Address',
                filterVariant: 'multi-select',
                filterSelectOptions: cities,
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "Адрес").value),
            },
            {
                header: 'Gender',
                filterVariant: 'multi-select',
                filterSelectOptions: ["Мужской", "Женский"],
                width: '100px',
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "Пол").value),
            },
            {
                accessorFn: (originalRow) => new Date(originalRow.params.value.find(item => item.title === "Дата рождения").value),
                header: 'Date of birth',
                filterVariant: 'date-range',
                Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
            },
        ],
        [],
    );

    return (
        <div>
            <MaterialReactTable
                data={users}
                columns={columns}
                initialState={{
                    density: 'compact',
                    showColumnFilters: true,
                    columnPinning: {
                        right: ['mrt-row-actions'],
                    },
                }}
                editDisplayMode={'cell'}
                enableRowActions={true}
                enableColumnPinning={true}
                positionActionsColumn={"last"}
                renderRowActions={(cell) => (
                    <Link to={`user/${parseInt(cell.row.id) + 1}`}>
                        <IconButton color="inherit">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Link>
                )}
                enableCellActions={true}
                enableEditing={true}
                enableClickToCopy={'context-menu'}
                renderCellActionMenuItems={({ internalMenuItems }) => [
                    ...internalMenuItems,
                ]}
            />
        </div>
    );
}
