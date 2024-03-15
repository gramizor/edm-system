import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import './AgGridTable.scss'
import 'ag-grid-enterprise';
import users from '../../Data';
import React, { useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AgGridTable = ({ userSelected }) => {
    const rowData = [];
    const gridRef = useRef();

    const CustomButtonComponent = (event) => {
        // console.log(event.data)
        // return <button onClick={(event) => window.alert(event.data)}>Push Me!</button>;
    };
    const colDefs = [
        { field: 'ФИО', cellDataType: 'text' },
        { field: 'Дата рождения', cellDataType: 'dateString' },
        { field: 'Номер телефона', cellDataType: 'text' },
        { field: 'Адрес', cellDataType: 'text' },
        { field: 'Пол', cellDataType: 'text' },
        { field: '', cellRenderer: CustomButtonComponent, flex: 1 },
    ];

    // users.forEach(user => {
    //     const row = {};

    //     user.params.value.forEach(param => {
    //         row[param.title] = param.value;
    //     });
    //     row['Перейти'] = (
    //         <Link to={`user/${parseInt(user.id) + 1}`}>
    //             <IconButton color="inherit">
    //                 <ArrowForwardIosIcon />
    //             </IconButton>
    //         </Link>
    //     );
    //     rowData.push(row);

    // });

    const defaultColDef = useMemo(() => {
        return {
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            editable: true
        };
    }, []);

    const autoGroupColumnDef = useMemo(() => {
        return {
            minWidth: 200,
        };
    }, []);

    const saveState = useCallback(() => {
        window.colState = gridRef.current.api.getColumnState();
        console.log('Порядок столбцов сохранен!');
    }, []);

    const restoreState = useCallback(() => {
        if (!window.colState) {
            console.log('Нет столбцов по умолчанию, сначала сохраните нужное состояние');
            return;
        }
        gridRef.current.api.applyColumnState({
            state: window.colState,
            applyOrder: true,
        });
        console.log('Порядок столбцов сброшен!');
    }, []);

    const resetState = useCallback(() => {
        gridRef.current.api.resetColumnState();
        console.log('Порядок столбцов восстановлен!');
    }, []);

    const onBtClearAllSorting = useCallback(() => {
        gridRef.current.api.applyColumnState({
            defaultState: { sort: null },
        });
        console.log('Сортировка сброшена!');
    }, []);

    const sortByBirthdayAndFullName = useCallback(() => {
        gridRef.current.api.applyColumnState({
            state: [
                { colId: 'ФИО', sort: 'asc', sortIndex: 0 },
                { colId: 'Дата рождения', sort: 'asc', sortIndex: 1 },
            ],
            defaultState: { sort: null },
        });
    }, []);

    const autoSizeStrategy = useMemo(() => {
        return {
            type: 'fitGridWidth',
            defaultMinWidth: 200,
            columnLimits: [
                {
                    colId: 'ФИО',
                    minWidth: 270,
                },
                {
                    colId: 'Дата рождения',
                    minWidth: 130,
                },
                {
                    colId: 'Номер телефона',
                    minWidth: 170,
                },
                {
                    colId: 'Адрес',
                    minWidth: 400,
                },
                {
                    colId: 'Пол',
                    minWidth: 100,
                },
            ],
        };
    }, []);

    const onGridReady = useCallback(() => {
        const rowData = [];

        users.forEach(user => {
            const row = {};
            row['id'] = user.id;
            user.params.value.forEach(param => {
                row[param.title] = param.value;
            });
            rowData.push(row);
        });
        gridRef.current.api.setGridOption('rowData', rowData);
        console.log(rowData)
    }, [users]);

    const [userSelectedId, setUserSelectedId] = useState(null);

    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        if (selectedRows.length === 1) {
            console.log("Выбранный ID пользователя:", selectedRows[0].id);
            userSelected(selectedRows[0].id);
            console.log(rowData)
        }
    }, [userSelected]);

    useEffect(() => {
        if (userSelectedId !== null) {
            userSelected(userSelectedId);
        }
    }, [userSelected, userSelectedId]);
    return (
        <div className="table-container">
            <div className="header">
                <div className="btn-section">
                    <div className="btn-group">
                        <div className="group-title">Порядок столбцов</div>
                        <ButtonGroup>
                            <Button variant="contained" onClick={saveState}>Сохранить</Button>
                            <Button variant="contained" onClick={restoreState}>Восстановить</Button>
                            <Button variant="contained" onClick={resetState}>Сбросить</Button>
                        </ButtonGroup>
                    </div>
                    <div className="btn-group">
                        <div className="group-title">Сортировка</div>
                        <ButtonGroup>
                            <Button variant="contained" onClick={sortByBirthdayAndFullName}>
                                ФИО, затем дата рождения
                            </Button>
                            <Button variant="contained" onClick={onBtClearAllSorting}>
                                Очистить
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>

            <div
                style={{
                    height: '700px', padding: '20px'
                }}
                className={
                    "ag-theme-quartz"
                }
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    autoGroupColumnDef={autoGroupColumnDef}
                    rowGroupPanelShow={'always'}
                    pivotPanelShow={'always'}
                    autoSizeStrategy={autoSizeStrategy}
                    rowSelection={'single'}
                    onSelectionChanged={onSelectionChanged}
                    onGridReady={onGridReady}
                />
            </div>
        </div>
    )
}

export default AgGridTable