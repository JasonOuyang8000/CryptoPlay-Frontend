import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import LayoutFixedHeader from 'components/Layout/Layout-fixed-header.js';
import CryptoTable from 'components/CryptoTable/CryptoTable.js';
import './AllCrypto.scss';

import useQuery from 'hooks/QueryParams.js';
import { useHistory } from 'react-router-dom';



export default function AllCrypto() {

    const [data, setData] = useState([]);
    const [offset, setOffSet] = useState(0);
    const [pageCount,setPageCount] = useState(0);
    const [selected, setSelected] = useState(0);

    const history = useHistory();
    let query = useQuery();





    const fetchCryptos = () => {
        fetch(`${process.env.BACKEND}/crypto/all?offset=${offset}`)
        .then(res=> res.json())
        .then(data => {
            setData(data.data.coins);
           
            setPageCount(Math.ceil(data.data.stats.total / 50));
        })
        .catch(error => console.log(error));
    }



    useEffect(() => {
      fetchCryptos();
      window.scrollTo(0, 0);

      history.push(`/cryptos?p=${selected}`);

 
      
    },[ offset ]);

    useEffect(() => {
      if (parseInt(query.get('p')) ) {
        setOffSet(parseInt(query.get('p')) * 50);

        setSelected(parseInt(query.get('p')));
      } 

   
     
    } , [])



    const handlePageClick = (data) => {
       
      setOffSet(data.selected * 50);
      setSelected(data.selected);
     
      
        
    }



    return (
       <LayoutFixedHeader>
        <div className="container">
          <div className="crypto-table">

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
              forcePage={selected}
            />
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
              forcePage={selected}
            />



            </div>
            </div>
      
    

       </LayoutFixedHeader>
     
      
    )
}