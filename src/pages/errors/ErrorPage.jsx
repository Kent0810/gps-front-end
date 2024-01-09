import { useTitle } from "ahooks";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  useTitle("KID-GPS - Error", {
    restoreOnUnmount: true,
  });
  console.error(error);
  return <div>{error.statusText}</div>;
}

export default ErrorPage;
