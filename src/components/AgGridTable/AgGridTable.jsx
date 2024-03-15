import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import './AgGridTable.scss';
import 'ag-grid-enterprise';
import users from '../../Data';
import React, {
    StrictMode,
    useCallback,
    useMemo,
    useRef,
    useState,
} from 'react';

const AgGridTable = () => {
    const rowData = [];
    const colDefs = [];

    users.forEach(user => {
        const row = {};

        user.params.value.forEach(param => {
            row[param.title] = param.value;
        });

        rowData.push(row);
    });

    users[0].params.value.forEach(param => {
        colDefs.push({ field: param.title });
    });
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const defaultColDef = useMemo(() => {
        return {
            width: 100,
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
            .then((data) => setRowData(data));
    }, []);

    const saveState = useCallback(() => {
        window.colState = gridRef.current.api.getColumnState();
        console.log('column state saved');
    }, []);

    const restoreState = useCallback(() => {
        if (!window.colState) {
            console.log('no columns state to restore by, you must save state first');
            return;
        }
        gridRef.current.api.applyColumnState({
            state: window.colState,
            applyOrder: true,
        });
        console.log('column state restored');
    }, []);

    const resetState = useCallback(() => {
        gridRef.current.api.resetColumnState();
        console.log('column state reset');
    }, []);

    return (
        <div className="table-container">
            <div className="example-section">
                <button onClick={saveState}>Save State</button>
                <button onClick={restoreState}>Restore State</button>
                <button onClick={resetState}>Reset State</button>
            </div>
            <div
                className="ag-theme-quartz"
                style={{ height: 300 }}
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
                />
            </div>
        </div >
    )
}

export default AgGridTable