import users from '../../Data';
import { MaterialReactTable } from 'material-react-table';

export const columns = [
    {
        header: 'ФИО',
        accessorKey: 'full_name'
    },
    {
        header: 'Дата рождения',
        accessorKey: 'birthday',
    },
    {
        header: 'Дата рождения',
        accessorKey: 'birthday',
        filterMethod: (filterValue, row) => {
            const filterDate = new Date(filterValue);
            const rowDate = new Date(row.birthday);
            return filterDate.getFullYear() === rowDate.getFullYear() &&
                filterDate.getMonth() === rowDate.getMonth() &&
                filterDate.getDate() === rowDate.getDate();
        }
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
        accessorKey: 'address'
    },
];

export default function CustomTable() {
    return (
        <MaterialReactTable
            columns={columns}
            data={users}
            initialState={{ density: 'compact' }}
        />
    );
}
