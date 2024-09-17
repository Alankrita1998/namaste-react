import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div className="text-center my-auto mx-auto mt-8">
            <h1 className="text-red-600 text-xl font-bold ">Error Occured</h1>
            <h3 className="font-bold text-4xl">{err.status}  {err.statusText} </h3>
        </div>
    )
}
export default ErrorPage