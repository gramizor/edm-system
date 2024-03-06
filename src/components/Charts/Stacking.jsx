import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import users from '../../Data';

export default function CityPopulationChart() {
    const cityCounts = {};

    users.forEach(user => {
        const address = user.params.value.find(param => param.title === "Address");
        if (address) {
            const city = address.address.split(',')[0].trim();
            cityCounts[city] = (cityCounts[city] || 0) + 1;
        }
    });

    const xAxis = Object.keys(cityCounts);
    const series = [{ data: Object.values(cityCounts) }];

    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: xAxis}]}
            yAxis={[{label: "Жители"}]}
            series={series}
            width={700}
            height={300}
        />
    );
}