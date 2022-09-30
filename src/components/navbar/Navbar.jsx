import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/netflix_logo.jpg'
import netflix from '../../assets/netflix_img.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
    return (
        <div className='navbar z-[999] text-white bg-[#0b0b0b] flex justify-between align-middle p-[0.2rem] top-0 fixed w-[100%]'>
            <div className="left flex align-middle">

                <img className='h-[3rem]' src={logo} alt="" />

                <span>Homepage</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>Series</span>
                <span>My List</span>
            </div>
            <div className="right flex">
                <span><SearchIcon /></span>
                <span>KID</span>
                <span><NotificationsIcon /></span>
                <span>
                    <img className='h-[3rem] w-[3rem] rounded-[10px] cursor-pointer' src={netflix} alt="" />
                </span>
                <div className="arro">
                    <ArrowDropDownIcon/>
                    <div className="sub-arro flex flex-col bg-[#0b0b0b] text-white">
                        <span>setting</span>
                        <span>more....</span>
                    </div>
                </div>
            </div>
            <img className=' absolute z-[-2] w-[100%] h-[100vh]' src="https://cdn.pixabay.com/photo/2016/08/30/16/26/banner-1631296_960_720.jpg" alt="" />
            <div className="feature w-[50rem] absolute top-[200px] left-[120px] gap-[1rem] flex flex-col">
                <img className=' w-[10rem] justify-center items-center h-[3rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMBpCRpiS30OWsBub3DMH7UvmvrzxhUc7vg&usqp=CAU" alt="" />
                <p className=' font-bold text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, qui tempora distinctio, consequatur illum minus, aperiam itaque architecto adipisci reiciendis inventore neque suscipit cum voluptatem! Debitis illum deleniti doloribus porro.</p>
                <div className="btn align-middle flex gap-[1rem]">
                    <button className=' cursor-pointer border-gray-700 bg-slate-400 px-[1rem] pt-[0.3rem] rounded-[10px] align-middle justify-center'><PlayArrowIcon/> Play</button> 
                    <button className=' cursor-pointer border-gray-700 bg-slate-400  px-[1rem] pt-[0.3rem] rounded-[10px] align-middle justify-center'><InfoIcon/> Info</button> 
                    

                </div>
            </div>
        </div>
        
    )
}

export default Navbar
