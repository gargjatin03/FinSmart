import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
    "#6366F1", // Indigo-500
    "#8B5CF6", // Violet-500
    "#E59E0B", // Amber-500
    "#10B981", // Emerald-500
];

function CategoryChart({categoryTotals}) {
    const data = Object.entries(categoryTotals || {}).map(([name, value], index) => ({
        name, value, color: COLORS[index % COLORS.length],
    }));

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Category Distribution</h3>
            {/* Chart Placeholder */}
            <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                <Pie 
                    data={data} 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3} 
                    dataKey="value" 
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color}/>
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toFixed(2)}` } />
                </PieChart>
            </ResponsiveContainer>
            
            <div className="grid grid-cols-2 gap-3 mt-6">
                {/* Category Legend Items */}
                {data.map((item) => {
                    return (
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded" 
                             style={{backgroundColor: item.color}}></div>
                            <span className="text-xs font-semibold text-gray-700"
                            >{item.name}</span>
                        </div>
                    );
                })};
            </div>
        </div>
    );

}
export default CategoryChart;