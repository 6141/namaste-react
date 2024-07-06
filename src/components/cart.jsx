import { useSelector } from "react-redux";
import { Card } from "./Card";

export const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);

  if (cartData.length === 0) return <h1 className="flex justify-center">No products in the cart</h1>;

  return (
    <div>
        <div className="py-6 px-6  flex justify-center">
      <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">CHECKOUT</button>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {cartData.map((item, key) => (
        <Card
          key={key}
          id={item.card?.info?.id}
          name={item.card?.info?.name}
          imageUrl= {`https://media-assets.swiggy.com/swiggy/image/upload/${item?.card?.info?.imageId}`}
          ratings={item.card?.info?.avgRating || '3'}
          showButton={true}
        />
      ))}
      </div>

    </div>
  );
};
