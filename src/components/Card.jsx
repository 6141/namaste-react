import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../utils/cart-slice";

export const Card = ({ name, imageUrl, ratings, showButton, id }) => {
  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
        <p className="text-yellow-500 mb-2">{ratings} ★</p>
        {showButton && <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={()=> {handleRemove(id)}}>REMOVE
        </button>}
      </div>
    </div>
  );
};


export const PromotedCard = (Card) => {
 return (props)=> {
    return(
      <div>
        <label className="bg-black text-white">Promoted</label>
        <Card {...props}/>
      </div>
    )
 }
}