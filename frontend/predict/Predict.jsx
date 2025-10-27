// src/components/Predict.jsx
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function Predict() {
  const [data, setData] = useState([]);
  const [subCategory, setSubCategory] = useState("Beverages");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/predictions?sub_category=${subCategory}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("API data:", json); // تحقق من البيانات
        const chartData = json.map((d) => ({
          date: d["Order Date"],
          actual: +d["Sales"] || 0,
          predicted: +d["Predicted_Sales"] || 0,
        }));
        console.log("Chart data:", chartData);
        setData(chartData);
      });
  }, [subCategory]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard - {subCategory}</h1>

      <select
        value={subCategory}
        onChange={(e) => setSubCategory(e.target.value)}
      >
        <option value="Beverages">Beverages</option>
        <option value="Food Grains">Food Grains</option>
        <option value="Fruits & Veggies">Fruits & Veggies</option>
        <option value="Oil & Masala">Edible Oil & Ghee</option>
        {/* أضف باقي Sub Categories إذا أردت */}
      </select>

      <LineChart width={900} height={400} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual" />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke="#82ca9d"
          name="Predicted"
        />
      </LineChart>
    </div>
  );
}

export default Predict;
