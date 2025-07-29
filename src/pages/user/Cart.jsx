import { useState, useEffect } from "react";

function Cart() {
    const [cart, setCart] = useState([]);
    const [count,setCount]=useState(1)
    

    const handleCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartItems);
    };

    useEffect(() => {
        handleCart();
    }, []);

    async function placeorder()
    {
        alert("order placed")
    }
    return (
        <>
        <table border="2">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((c) => (
                    <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>
                            <img src={c.image} alt={c.name} width="50" />
                        </td>
                        <td>₹{c.price}</td>
                        <td><button onClick={()=>setCount(count+1)}>+</button>
                        <input type="text" value={count}  onChange={(e) => setCount(Number(e.target.value))}/>
                        <button onClick={()=>setCount(count-1)}>-</button></td>
                        <td>{c.price*count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={()=>placeorder()}>place order</button>
        </>
    );
}

export default Cart;
