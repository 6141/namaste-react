export const Shimmer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {Array(10).fill("").map((_, index) => (
          <div key={index} className="h-64 bg-gray-200 animate-pulse"></div>
        ))}
      </div>
    );
  };
  