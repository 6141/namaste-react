import { Shimmer } from "./shimmer";
import { useParams } from "react-router-dom";
import { useResMenu } from "../hooks/useResMenu";

export const ResInfo = () => {
  const { resId } = useParams();
  const resinfo = useResMenu(resId);

  if (resinfo === null) return <Shimmer />;

  return (
    <div className="max-w-7xl mx-auto p-5">
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold">{resinfo?.cards[2].card.card.info.name} - {resinfo?.cards[2].card.card.info.costForTwoMessage}</h1>
        <h2 className="text-xl text-gray-600">Cuisines: {resinfo?.cards[2].card.card.info.cuisines.join(', ')}</h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card?.itemCards?.map((item, index) => (
          <div className="bg-gray-200 border border-gray-300 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" key={index}>
            <img className="w-full h-64 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.card?.info?.imageId}`} alt={item.card.info.name} />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
              <p className="text-gray-600">{item.card.info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
