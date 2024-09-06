import { EMPTY } from "../utils/constants";

const EmptySearch = () => {
    return (
        <div className ="my-auto mx-aut0">
            <p className="text-base text-center mt-14">Sorry, we couldn't find any results for your searched item.</p>
            <img src = {EMPTY} className ="mt-10 justify-center mx-auto "/>
        </div>
    )
};
export default EmptySearch;