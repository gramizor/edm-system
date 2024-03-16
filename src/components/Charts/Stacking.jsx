import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import users from '../../Data';

export default function CityPopulationChart() {
    const cityCounts = {};

    users.forEach(user => {
        const address = user.params.value.find(param => param.title === "Адрес");
        if (address) {
            const city = address.value.split(',')[0].trim();
            cityCounts[city] = (cityCounts[city] || 0) + 1;
        }
    });

    const xAxis = Object.keys(cityCounts);
    const series = [{ data: Object.values(cityCounts) }];

    return (
        <BarChart
            xAxis={[{ label: "Города", scaleType: 'band', data: xAxis }]}
            yAxis={[{ label: "Жители" }]}
            series={series}
            width={700}
            height={300}
        />
    );
}