import React from 'react'
import { useRouter } from 'next/router'
import Adduser from './adduser'
import { useEffect, useState } from "react";
const axios = require('axios');

const Id = () => {
  const router = useRouter()
  console.log("router", router)

  useEffect(() => {
    getUserData();
  }, []);

  const [userdata, setuserdata] = useState([]);

  const getUserData = async () => {
    console.log('====================================', router.query.id);
    // console.log("testing");
    // console.log('====================================');
    try {
      var data = {
        "condition": {
          "_id": router.query.id
        }
      }
      const dataset = axios.post('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/getsinglenextuser', data)
        .then((response) => {
          let dataArray = JSON.stringify(response);
          dataArray = JSON.parse(dataArray);
          console.log("success444", response);
          console.log("success444", dataArray.data.result);
          // listingDataSource = response.data.results.res;
          setuserdata(dataArray.data.result);
        })
        .catch(err => console.log("error", err))

    } catch (e) {
      console.log(e);
    }
  };
  // console.log('====================================');
  // console.log(userdata);
  // console.log('====================================');
  return (
    <>
      {userdata.length > 0 && <div>
        <Adduser dataset={userdata} />
      </div>}
    </>
  );
}

export default Id;