import React, { useState } from "react";
import Avatar from "react-avatar";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiFolderUserFill } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function UserProfile() {
  const [data,setData] = useState({
    Fname:"",
    Lname:"",
    gender:"",
    Email:"",
    PhoneNo:"",
  })

  const handleOnChange = (e)=>{
    const {name, value} = e.target;
    setData((prev)=>{
      return{
      ...prev,
      [name]:value,
      }
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    if (data.Fname==='') {
       return alert("First Name is Required");
    }
    if (data.Lname==='') {
       return alert("Last Name is Required");
    }
    if (data.gender==='') {
      return alert("Gender is Required");
    }
    if (data.Email==='') {
      return alert("Email is Required");
    }
    if (data.PhoneNo==='') {
      return alert("Phone No. is Required");
    }
    
    
    console.log(data)

  }

  return (
    <div className=" mt-7 px-0 lg:px-44 w-[100%] ">
      <div className="flex justify-between ">
        <div className="w-[30%] md:w-[28%] lg:w-[25%] ">
          <div className=" bg-white px-2">
            <Avatar
              src="https://img.freepik.com/premium-vector/avatar-man-with-beard-office-worker-wearing-glasses-it-developer-engineer-programmer_277909-144.jpg?w=2000"
              size="60"
              round={true}
            />
            <span className="pl-4 font-medium text-sm lg:text-lg">Hello</span>
          </div>
          <div className="mt-5 bg-white">
            <div className=" px-2 py-6 flex items-center justify-between">
              <div className="flex items-center">
                <HiOutlineShoppingBag size={24} />
                <span className="pl-4 text-gray-700 text-xs lg:text-base">MY ORDERS</span>
              </div>
              <RiArrowRightSLine size={24} />
            </div>
            <hr />
            <div className=" px-2 py-6 flex items-center">
              <FaRegUser size={24} />
              <span className="pl-4 text-gray-700 text-xs md:text-sm lg:text-base">ACCOUNT SETTINGS</span>
            </div>
            <div className="flex flex-col mx-12  gap-3 text-xs md:text-xs lg:text-sm">
              <span>Profile Information</span>
              <span>Manage Addresses</span>
              <span>PAN Card Information</span>
            </div>
            <hr />
            <div className=" px-2 py-6 flex items-center">
              <MdAccountBalanceWallet size={24} />
              <span className="pl-4 text-gray-700 text-xs md:text-sm lg:text-base">PAYMENTS</span>
            </div>
            <div className="flex flex-col mx-12  gap-3 text-xs md:text-xs lg:text-sm">
              <span>Gift Cards</span>



              <span>Saved UPI</span>
              <span>Saved Cards</span>
            </div>
            <hr />
            <div className=" px-2 py-6 flex items-center">
              <RiFolderUserFill size={24} />
              <span className="pl-4 text-gray-700 text-xs md:text-sm lg:text-base">MY STUFF</span>
            </div>
            <div className="flex flex-col mx-12  gap-3 text-xs md:text-xs lg:text-sm">
              <span>My Coupons</span>
              <span>My Reviews & Ratings</span>
              <span>All Notifications</span>
              <span>My Wishlist</span>
            </div>
            <hr />
            <div className=" px-2 py-6 flex items-center">
              <RiLogoutCircleLine size={24} className="rotate-90" />
              <span className="pl-4 text-gray-700 text-xs md:text-sm lg:text-base">Logout</span>
            </div>
          </div>
          <div className="mt-5 bg-white  px-2  flex items-center">
            <div className=" py-5">
              <h6>Frequently Visited</h6>
              <span className="pt-3 text-xs text-gray-700">
                Track Order Help Center{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[69%] md:w-[70.5%] lg:w-[73.5%] bg-white ">
          <form action="" className="py-8 px-8">
            <div className=" w-[90%] lg:w-[30%] justify-between flex">
              <span className="text-xs md:text-sm lg:text-lg font-medium">Personal Information</span>
              <button className="text-xs md:text-sm lg:text-lg text-blue-800">Cancel</button>
            </div>
            <div className="w-[75%] mt-7 gap-3 flex flex-col lg:flex-row ">
              <input
                type="text"
                placeholder="First Name"
                name="Fname"
                value={data.Fname}
                onChange={handleOnChange}
                className=" border-[1px] border-gray-700 outline-none py-0 md:py-0 lg:py-2 px-2 w-[70%] lg:w-[40%] "
                
              />
              <input
                type="text"
                placeholder="Last Name"
                name="Lname"
                value={data.Lname}
                onChange={handleOnChange}
                className=" border-[1px] border-gray-700 outline-none py-0 lg:py-2 px-2  w-[70%] lg:w-[40%]"
              />
              <button className=" py-0 md:py-1 lg:py-2 px-1 lg:px-8 w-[50%] lg:w-[30%] bg-blue-700 text-white text-xs md:text-sm lg:text-lg"  onClick={submitHandler}>SAVE</button>
            </div>
            <div className="flex flex-col mt-7">
              <span className="text-xs md:text-sm lg:text-lg">Your Gender</span>
              <div className="flex gap-2 lg:flex lg:flex-row lg:gap-4 mt-2 lg:mt-5" >
                <input type="radio" name="gender" value="Male" id="Male" className="cursor-pointer" checked={data.gender==='Male'} onChange={handleOnChange} />
                <label htmlFor="Male" className="cursor-pointer">Male</label>
                <input type="radio" name="gender" value="Female" id="Female" className="cursor-pointer" checked={data.gender==='Female'} onChange={handleOnChange} />
                <label htmlFor="Female" className="cursor-pointer">Female</label>
              </div>
            </div>
            <div className=" mt-7">
              <div className=" flex gap-5">
                <span className="text-xs md:text-sm lg:text-lg">Email Address</span>
                <button className="text-blue-800 text-xs md:text-sm lg:text-lg">Edit</button>
              </div>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={data.Email}
                onChange={handleOnChange}
                className="border-[1px] border-gray-700 outline-none py-0 lg:py-2 px-2  w-32 lg:w-64 mt-5"
              />
            </div>
            <div className="mt-7">
              <div className="flex gap-5">
                <span className="text-xs md:text-sm lg:text-lg">Phone Number</span>
                <button className="text-blue-800 text-xs md:text-sm lg:text-lg">Edit</button>
              </div>
              <input
                type="number"
                placeholder="Ph. No."
                name="PhoneNo"
                value={data.PhoneNo}
                onChange={handleOnChange}
                className="border-[1px] border-gray-700 outline-none py-0 lg:py-2 px-2  w-32 lg:w-64 mt-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
