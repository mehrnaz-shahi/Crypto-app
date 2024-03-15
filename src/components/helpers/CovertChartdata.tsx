const convertChartData = (data: any, type: string) => {
    const convertedData = data[type].map((item: { [x: string]: any }) => ({
        date: item[0],
        [type]: item[1]
    }));
    return convertedData;
};

export {convertChartData};