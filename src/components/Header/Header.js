import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink as Link, useHistory } from "react-router-dom";
import SearchContent from 'components/SearchContent/SearchContent.js';
import "./Header.scss";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '999',
    },
  };
  

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const [searchInput, setSearchInput] = useState('');

    const history = useHistory();

    const [ modalOpen, setModalOpen ] = useState(false);

    const closeModal = () => {
      setModalOpen(false);
    }  

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchInput) {
            setModalOpen(true);
        }
        
        return;
  

    }

    const handleInput = (e) => {
        const {value} = e.target;
        setSearchInput(value);
    }

    return (
        <header>
            <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
            >
                <SearchContent 
                    searchInput={searchInput} 
                    setSearchInput={setSearchInput}
                    closeModal={closeModal}
                />
            </Modal>
            <div className="container">
                <nav className="d-flex nav align-items-center">   
                   <div className="brand-title me-5">
                        
                        
                        <h1>Crypto Play</h1>
                   </div>
                    <ul className="navlinks">
                        <li>
                            <Link exact={true} to="/" activeClassName="active-nav">Home</Link>
                        </li>
                   
                        <li>
                            <Link to="/cryptos" activeClassName="active-nav">Cryptos</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active-nav">About</Link>
                        </li>

                    </ul>


                  


                    <ul className="ms-auto login-signup">
                        <li className="me-3">

                        <div className="ms-auto search-bar">
                        <form onSubmit={handleSearch} className="search-form">
                            <input placeholder="Search Crypto" type="text" onChange={handleInput} value={searchInput}/>

                            <button>
                                <FontAwesomeIcon icon={faSearch} size="2x" />    
                            </button>
                        </form>
                      
                        
                    </div>
                        </li>
                        <li><Link className="shadow" to="/login" >Login</Link></li>
                        <li><Link className="shadow" to="/signup" >Sign up</Link></li>
                        
                    </ul>
                    <div onClick={toggleMenu} className="menu-toggler d-lg-none ms-auto shadow">
                        <FontAwesomeIcon className="" icon={faBars} size="2x" />

                    </div>
                    
                
                  

                </nav>
                {
                    showMenu && 
                    <ul className="menu shadow p-4">
                        <li>
                            <Link exact={true} to="/" activeClassName="active-nav">Home</Link>
                        </li>
                
                        <li>
                            <Link to="/cryptos" activeClassName="active-nav">Cryptos</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active-nav">About</Link>
                        </li>
                        <li><Link to="/login" >Login</Link></li>
                        <li><Link to="/signup" >Sign up</Link></li>

                    </ul>
                    }
            </div>
        </header>
    )
}