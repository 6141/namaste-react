export const Card = ({ name, imageUrl, ratings }) => {
  return (
    <div className="bg-gray-200 border border-gray-300 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={name} />
      <div className="p-5">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2 className="text-gray-600">{ratings}</h2>
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