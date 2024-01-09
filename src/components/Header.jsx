import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import ytLogo from "../assets/images/yt-logo.png"
import ytLogoMobile from "../assets/images/yt-logo-mobile.png"

import { SlMenu } from "react-icons/sl"
import { IoIoSearch } from "react-icons/io"
import { RiVideoAddLine } from "react-icons/ri"
import { FiBell } from "react-icons/fi"
import { CgClose } from "react-icons/cg"

import { Context } from '../context/contextApi'
// import Loader from "../shared/loader"

const Header = () => {

  const [searchQuery, setsearchQuery] = useState("");

  const {loading, mobileMenu, setMobileMenu} = useContext(Context)

  const navigate = useNavigate();

  const searchQueryHandler = (event) =>{
    if((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0){
      navigate(`/searchResult/${searchQuery}`)
    }
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  }

  const {pathname} = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0]

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5"></div>
  )
}

export default Header
