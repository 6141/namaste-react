import { Shimmer } from "./shimmer";
import { useParams } from "react-router-dom";
import { useResMenu } from "../hooks/useResMenu";

export const ResInfo = () => {
    const {resId} = useParams()

    const resinfo = useResMenu(resId)

    if (resinfo === null) return <Shimmer />;

    return (
        <div className="new-container">
            <header className="new-header">
                <h1>{resinfo?.cards[2].card.card.info.name} - {resinfo?.cards[2].card.card.info.costForTwoMessage}</h1>
                <h2>Cuisines: {resinfo?.cards[2].card.card.info.cuisines.join(', ')}</h2>
            </header>
            <div className="new-card-container">
                {resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card?.itemCards?.map((item, index) => (
                    <div className="new-card" key={index}>
                        <h3>{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
                        <img className="new-card-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.card?.info?.imageId}`} alt={item.card.info.name} />
                        <p>{item.card.info.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
