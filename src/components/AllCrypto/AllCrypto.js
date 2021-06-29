import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import LayoutFixedHeader from 'components/Layout/Layout-fixed-header.js';
import CryptoTable from 'components/CryptoTable/CryptoTable.js';
import './AllCrypto.scss';



export default function AllCrypto() {

    const [data, setData] = useState([]);
    const [offset, setOffSet] = useState(0);
    const [pageCount,setPageCount] = useState(0);


    const fetchCryptos = () => {
        fetch(`${process.env.BACKEND}/crypto/all?offset=${offset}`)
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setPageCount(Math.ceil(data.data.stats.total / 50));
        })
        .catch(error => console.log(error));

    }

    useEffect(() => {
      fetchCryptos();
    },[ offset ]);


    const handlePageClick = (data) => {
       
        setOffSet(data.selected * 50);


        
    }

 

    return (
       <LayoutFixedHeader>
        <div className="container">
        <CryptoTable data={data} />


  
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />



        </div>
    

       </LayoutFixedHeader>
     
      
    )
}