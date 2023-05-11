import axios from "axios";
import { useEffect, useState } from "react";


export const PhoneCart = () => {
const [phone,SetPhone]=useState([])
console.log(phone)
useEffect(()=>{
	axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
	.then(data=>SetPhone(data))
},[])

	return (
		<div>
			okkk
		</div>
	);
}


