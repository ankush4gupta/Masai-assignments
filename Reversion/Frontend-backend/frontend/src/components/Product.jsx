import { useEffect, useState } from "react"

export const Product = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetchProduct()
    }, []);
    const fetchProduct = async () => {
        try {
            let res = await fetch(`http://localhost:3008/product`)
            let result = await res.json();
            setdata(result);
        } catch (error) {
            console.log(error.message)
        }
    }
    console.log(data)
    return <div>
        hello
    </div>
}