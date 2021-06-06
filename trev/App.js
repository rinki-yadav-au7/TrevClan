import React, { useState, useEffect } from 'react';
import BidderCard from '../src/component/BidderCard';
import Pagination from '../src/component/Pagination';
// import Filters from '../src/component/Filter'
// import {CustomerDataProviderContext} from '../src/component/Context/CustomerListContext'
import axios from 'axios';
import './App.css';

const App = () => {
  // const { value: customersList } = useContext(CustomerDataProviderContext);
  const [item, setitem] = useState([]);
  const [selectedOption, setselectedOption] = useState("maxbid");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  useEffect(() => {
    const fetchitem = async () => {
      setLoading(true);
      const res = await axios.get('https://intense-tor-76305.herokuapp.com/merchants');
      setitem(res.data);
      setLoading(false);
      
    };

    fetchitem(); 
  }, []);

  useEffect(()=>{
    bidHandler()

  })
  // useEffect(() => {
  //   if (customersList) setitem([...customersList, { id: "render" }]);
  // }, [customersList]);

const bidHandler =() =>{
  item.map(singleBid => {;
     console.log(singleBid.bids.length);
     return singleBid
     
  })
}
  const indexOfLastPost = currentPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;
  const currentitem = item.slice(indexOfFirstPost, indexOfLastPost);

  // const customersInAscendingOrderByBidAmount = useCallback(
  //   (e) => {
  //     if (e === "minbid") {
  //       setitem(item.reverse());
  //       setselectedOption("minbid");
  //     }
  //     if (e === "maxbid") {
  //       setitem(item.reverse());
  //       setselectedOption("maxbid");
  //     }
  //   },
  //   [item]
  // );


  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Bidder</h1>
      {/* <Filters
          customersInAscendingOrderByBidAmount={customersInAscendingOrderByBidAmount}
          selectedOption={selectedOption}
        /> */}
      <BidderCard 
       item={currentitem} 
       loading={loading} 
       />
      <Pagination
        itemPerPage={itemPerPage}
        totalitem={item.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
