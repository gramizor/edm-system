import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import users from '../../Data';


export default function GenderPieChart() {
    const genderCounts = users.reduce((counts, user) => {
        const gender = user.params.value.find(param => param.title === 'Gender').gender;
        counts[gender] = (counts[gender] || 0) + 1;
        return counts;
    }, {});

    const seriesData = Object.entries(genderCounts).map(([gender, count]) => ({
        id: gender,
        value: count,
        label: gender,
    }));

    return (
        <PieChart
            series={[{ data: seriesData }]}
            width={400}
            height={200}
        />
    );
}