import './cart-item.styles.scss'

const CartItem = ({ cardItem }) => {
    const { name, imgeUrl, price, quantity  } = cardItem;

     return (
        <div className='cart-itm-container'>
            <img src={imgeUrl} alt={`${name}`}/>
            <span>{quantity}</span>
        </div>
     )

}

export default CartItem;