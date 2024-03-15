import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import './AgGridTable.scss'
import 'ag-grid-enterprise';
import users from '../../Data';
import React, { useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { Button, ButtonGroup } from '@mui/material';

const AgGridTable = () => {
    const rowData = [];
    const colDefs = [
        { field: 'ФИО', cellDataType: 'text' },
        { field: 'Дата рождения', cellDataType: 'dateString' },
        { field: 'Номер телефона', cellDataType: 'text' },
        { field: 'Адрес', cellDataType: 'text' },
        { field: 'Пол', cellDataType: 'text' }
    ];
    const gridRef = useRef();

    users.forEach(user => {
        const row = {};

        user.params.value.forEach(param => {
            row[param.title] = param.value;
        });

        rowData.push(row);
    });

    const defaultColDef = useMemo(() => {
        return {
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
        };
    }, []);

    const autoGroupColumnDef = useMemo(() => {
        return {
            minWidth: 200,
        };
    }, []);

    const sideBar = useMemo(() => {
        return {
            toolPanels: ['columns'],
        };
    }, []);

    const onGridReady = useCallback((params) => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
        // .then((data) => setRowData(data));
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
                    sideBar={sideBar}
                    rowGroupPanelShow={'always'}
                    pivotPanelShow={'always'}
                    onGridReady={onGridReady}
                    autoSizeStrategy={autoSizeStrategy}
                />
            </div>
        </div>
    )
}

export default AgGridTable