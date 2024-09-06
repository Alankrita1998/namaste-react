import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";


const Login = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate("/");
    }

    return (
        <div className=" h-full w-full bg-gradient-to-l from-teal-50 to-yellow-50">
        <div className=" pt-20 pb-32">
        <h1 className="text-center font-serif text-3xl mb-8 font-bold">Welcome to Foodie.co</h1>
        <form className="border-2  w-[40rem] p-8 mt- my-auto shadow-2xl bg-white shadow-gray-500 justify-center mx-auto" >
        <div className= "flex justify-between my-4">
        <label className="my-auto text-sm font-bold font-serif"> Name :</label>
        <input type= "text" placeholder="Enter Name" className= "  text-sm font-serif p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
        </div>

        <div className= "flex justify-between my-4">
        <label className="my-auto text-sm   font-bold font-serif"> E-mail :</label>
        <input type= "text" placeholder="Enter email address" className= " text-sm font-serif  p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
        </div>

        <div className="text-center flex  justify-center">
            <button type="button" className="  bg-green-700 hover:bg-slate-700 text-sm text-white font-bold w-24 h-10 mt-7 shadow-md border-2 " onClick = {() => {handleLogin()}}>Login</button>
           <Link to="/signup"> <button type="button"  className="  bg-blue-400 hover:bg-slate-700 text-sm text-white font-bold w-24 h-10 mt-7 shadow-md border-2 " >Sign Up</button></Link>

        </div>

        </form>
        </div>
        {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-100 font-serif p-10  rounded shadow-lg mx-auto text-center">
                      <h2 className="text-base font-serif  text-gray-600  mb-4">Logged in Successfully !</h2>
                      <button
                        className="mt-2 shadow-sm shadow-black font-serif bg-green-600 text-white text-sm  p-1 w-12 "
                        onClick={() => {handleCloseModal()}}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                )}
        </div>
    )
};

export default Login;