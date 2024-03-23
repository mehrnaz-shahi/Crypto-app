import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data, type }: { data: any[], type: string }) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    // Convert timestamps to human-readable dates
    const formattedData = data.map((entry) => ({
        ...entry,
        date: new Date(entry.date).toLocaleString(), 
    }));
    // console.log('data in ch: ', formattedData);


    return (
        <div className='h-96'>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    data={formattedData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" >
                        {/* <Label value="Date" position="bottom" /> */}
                    </XAxis>
                    <YAxis dataKey={type} domain={['auto', 'auto']} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={type} activeDot={{ r: 8 }} stroke="#6464ae" strokeWidth="2px" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
