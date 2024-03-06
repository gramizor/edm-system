import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import users from '../../Data';

export default function Linear() {
    const [chartData, setChartData] = React.useState({ xAxis: [], series: [] });

    React.useEffect(() => {
        const ageCounts = {};
        users.forEach(user => {
            const birthday = new Date(user.params.value.find(param => param.title === 'Date of birth').birthday);
            const age = new Date().getFullYear() - birthday.getFullYear();
            ageCounts[age] = (ageCounts[age] || 0) + 1;
        });

        const ages = Object.keys(ageCounts).map(age => parseInt(age)).sort((a, b) => a - b);
        const xAxisData = ages;
        const seriesData = [{ data: ages.map(age => ageCounts[age]) }];

        setChartData({ xAxis: xAxisData, series: seriesData });
    }, []);

    return (
        <LineChart
            xAxis={[{ data: chartData.xAxis, label: 'Возраст', min: Math.min(...chartData.xAxis)-1 }]}
            yAxis={[{ min: 0, label: 'Количество людей' }]}
            series={chartData.series}
            width={500}
            height={300}
        />
    );
}
