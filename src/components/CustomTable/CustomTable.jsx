import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import users, { cities } from '../../Data';
import { MaterialReactTable } from 'material-react-table';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

export const columns = [
    {
        header: 'ФИО',
        accessorKey: 'params.value[0].full_name',
        filterVariant: 'text',
    },
    {
        accessorFn: (originalRow) => new Date(originalRow.birthday), //convert to date for sorting and filtering
        id: 'birthday',
        header: 'Дата рождения',
        filterVariant: 'date-range',
        Cell: ({ cell }) => cell.getValue().toLocaleDateString(), // convert back to string for display
    },
    {
        header: 'Телефон',
        accessorKey: 'phone'
    },
    {
        header: 'Почта',
        accessorKey: 'email'
    },
    {
        header: 'Адрес',
        accessorKey: 'address',
        filterVariant: 'multi-select',
        filterSelectOptions: cities,
    },
    {
        header: '',
        accessorKey: 'actions',
        Cell: ({ row }) => (
            <Link to={`/user/${parseInt(row.id) + 1}`}>
                <IconButton color="inherit">
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>
        )
    }
];

// // Создаем функцию, которая получает все доступные поля из params всех пользователей
// const getAllFields = () => {
//     const allFields = new Set();
//     users.forEach(user => {
//         user.params.value.forEach(field => {
//             allFields.add(field.title);
//         });
//     });
//     return Array.from(allFields);
// };

// // Создаем колонки динамически на основе всех доступных полей в params всех пользователей
// const columns = getAllFields().map(field => ({
//     header: field,
//     accessorKey: field.toLowerCase().replace(/\s+/g, '_'), // Преобразуем заголовок в ключ, убирая пробелы и приводя к нижнему регистру
// }));

export default function CustomTable() {
    return (
        <MaterialReactTable
            columns={columns}
            data={users}
            initialState={{ density: 'compact' }}
        />
    );
}
