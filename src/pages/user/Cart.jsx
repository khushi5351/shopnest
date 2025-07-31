import { useState, useEffect } from "react";
import { placeOrderrr } from "../../apis/handle_api";
import './Cart.css'
function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = cartItems.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));
        setCart(updatedCart);
    }, []);

    const handleQuantityChange = (id, amount) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + amount;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    async function placeOrder() {
        let res=placeOrderrr({cart})
        alert("Order placed");
         localStorage.removeItem("cart");
    setCart([]);
    }

    return (
        <>
        <div className="cart-container">
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
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.image} alt={item.name} width="50" />
                            </td>
                            <td>₹{item.price}</td>
                            <td>
                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                <input
                                    type="text"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(
                                            item.id,
                                            Number(e.target.value) - item.quantity
                                        )
                                    }
                                    style={{ width: "40px", textAlign: "center" }}
                                />
                                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            </td>
                            <td>₹{item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
            </div>
        </>
    );
}

export default Cart;
