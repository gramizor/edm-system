import { IconButton, Box, Divider } from '@mui/material'; // Add Divider import
import { Link } from 'react-router-dom';
import users, { cities } from '../../Data';
import { useMemo } from 'react';
import { MaterialReactTable, MRT_ActionMenuItem } from 'material-react-table'; // Add MRT_ActionMenuItem import
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CustomTable() {
    const columns = useMemo(
        () => [
            {
                header: 'Full name',
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "Full name").full_name),
                filterVariant: 'text',
            },
            {
                accessorFn: (originalRow) => new Date(originalRow.params.value.find(item => item.title === "Date of birth").birthday),
                header: 'Date of birth',
                filterVariant: 'date-range',
                Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
            },
            {
                header: 'Phone number',
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "Phone number").phone),
            },
            {
                header: 'Address',
                filterVariant: 'multi-select',
                filterSelectOptions: cities,
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "Address").address),
            },
            {
                header: 'Gender',
                filterVariant: 'multi-select',
                filterSelectOptions: ["Мужской", "Женский"],
                width: '100px',
                accessorFn: (originalRow) => new String(originalRow.params.value.find(item => item.title === "Gender").gender),
            }
        ],
        [],
    );

    return (
        <div>
            <MaterialReactTable
                columns={columns}
                data={users}
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
                renderRowActions={(row) => (
                    <Link to={`/user/${+row.id + 1}`}>
                        <IconButton color="inherit">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Link>
                )}
            />
        </div>
    );
}
