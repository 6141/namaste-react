export const Card = ({ name, imageUrl, ratings }) => {
  return (
    <div className="card">
      <img height="250px" width="300px" src={imageUrl} alt={name} />
      <div className="card-info">
        <h2>{name}</h2>
        <h2 className="ratings">{ratings}</h2>
      </div>
    </div>
  );
};
