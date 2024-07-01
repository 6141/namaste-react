import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-center">
        Oops! Something went wrong. <br />
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};
