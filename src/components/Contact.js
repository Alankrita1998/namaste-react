import {CONTACT} from "../utils/constants";
import headphone from "../utils/headphone.svg";



const Contact = () => {


  return (
    <div>
    <div className=" shadow-md">
      <div className="flex justify-center mx-auto">
      <h2 className="my-auto mt-4  font-bold text-2xl p-2 font-serif">Contact</h2>
      <img src={headphone} className="w-8 my-auto" />
      </div>
      <p className = "my-2 font-serif text-gray-600 text-xs text-center">Got a question ? We'd love to hear from you. Send us a message and we will try to get back to you ASAP.</p>
      <div className="flex justify-between">
        <img src={CONTACT} alt= "contact"  className = "w-[400px] ml-8" />
        <form className="border-2  w-[40rem] p-8  mr-10 mt-8 rounded-3xl mb-8 shadow-2xl shadow-gray-500">
            <div className= "flex justify-between my-4">
            <label className="my-auto text-sm font-bold font-serif"> Name :</label>
            <input type= "text" placeholder="Enter Name" className= "  text-sm font-serif p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
            </div>

            <div className= "flex justify-between my-4">
            <label className="my-auto text-sm   font-bold font-serif"> E-mail :</label>
            <input type= "text" placeholder="Enter email address" className= " text-sm font-serif  p-1 w-[28rem] ml-8 border border-gray-400 shadow-sm" />
            </div>

            <div className= "flex justify-between my-4">
            <label className="my-auto text-sm  font-bold font-serif"> Message :</label>
            <input type= "text" placeholder="Enter a message" className= "  text-sm  font-serif  p-1 w-[28rem] h-20  border border-gray-400 shadow-sm" />
            </div>

            <div className="text-center"><button className="mx-auto  bg-green-700 hover:bg-slate-700 text-sm text-white font-bold w-24 h-10 mt-7 shadow-md border-2 " >Submit</button></div>

        </form>
        </div>
    </div>
    </div>
  )
}

export default Contact;



