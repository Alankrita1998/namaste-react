import { useNavigate } from "react-router-dom";



const Signup = () => {

    const navigate = useNavigate(); 

    const handleSignUp = () => {
        navigate("/login"); 
    }
    return (
        <div className=" h-full w-full bg-gradient-to-l from-teal-50 to-yellow-50">
        <div className=" pt-20 pb-20">
        <form className="border-2  w-[40rem] p-8 mt- my-auto shadow-2xl bg-white shadow-gray-500 justify-center mx-auto" >
        <div className= "flex justify-between my-4">
        <label className="my-auto text-sm font-bold font-serif"> First Name :</label>
        <input type= "text" placeholder="Enter First Name" className= "  text-sm font-serif p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
        </div>

        <div className= "flex justify-between my-4">
        <label className="my-auto text-sm   font-bold font-serif">Last Name :</label>
        <input type= "text" placeholder="Enter Last Name" className= " text-sm font-serif  p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
        </div>

        <div className= "flex justify-between my-4">
        <label className="my-auto text-sm   font-bold font-serif"> Mobile No :</label>
        <input type= "text" placeholder="Enter Mobile No" className= " text-sm font-serif  p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
        </div>

        <div className= "flex justify-between my-4">
        <label className="my-auto text-sm   font-bold font-serif "> E-mail :</label>
        <input type= "text" placeholder="Enter email address" className= " text-sm font-serif  p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
        </div>

        <div className="text-center flex  justify-center">
            <button className="  bg-blue-400 hover:bg-slate-700 text-sm text-white font-bold w-24 h-10 mt-7 shadow-md border-2 " onClick = {() => {handleSignUp()}} >Sign Up</button>
        </div>

        </form>
        </div>
        </div>
    )
};

export default Signup;