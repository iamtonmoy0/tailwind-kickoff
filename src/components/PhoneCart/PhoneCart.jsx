import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart,Bar,XAxis,YAxis } from "recharts";


export const PhoneCart = () => {
const [phone,SetPhone]=useState([])
useEffect(()=>{
	axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
	.then(data=>{
		const loadedData=data.data.data;
		const phoneData=loadedData.map(phone=>{
			const parts=phone.slug.split('-');
			const price=parseInt(parts[1])
			const phoneInfo={
				name:phone.phone_name,
				price:price
			}
			return phoneInfo;
		});
			SetPhone(phoneData)
	});
	
},[])

	return (
		<div>
			<BarChart
			width={500}
			height={500}
			data={phone}
			>
		<Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" ></XAxis>
                <YAxis/>
			</BarChart>
		</div>
	);
}


