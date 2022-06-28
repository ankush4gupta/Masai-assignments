import { useState } from "react"

export const TableList = ({ productdata })=>{
    // const [pro,setpro] = useState()
    // setpro(productdata);
    console.log(productdata,"productdata")
    return <div>
        <table>
            <thead>
                <th>Image</th>
                <th>price</th>
                <th>name</th>
                <th>discription</th>
                <th>buyNow</th>
            </thead>
            <tbody>
                {
                    productdata ? productdata.map((e) => {
                        return <tr>
                            <td>{e.image.img1}</td>
                            <td>{e.price}</td>
                            <td>{e.name}</td>
                            <td>{e.details}</td>
                            <td>Buynow</td>
                        </tr>
                    }) : ""
                }

            </tbody>
        </table>
    </div>
}