import React from 'react'
import { useRouter } from 'next/router'
import Adduser from './adduser'
import { useEffect, useState } from "react";
const axios = require('axios');

export default function id() {
    const router = useRouter()
    console.log("router",router);
    const id=router.query.id;
    const [userdata, setuserdata] = useState([]);
    
    useEffect(() => {
        getUserData();
      }, []);
    const getUserData = async () => {
        try {
          var data = {
            "condition":{
                "_id":router.query.id
            }
          }
          const dataset = axios.post('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/getsinglenextuser', data)
            .then((response) => {
              console.log("success444", response);

              // listingDataSource = response.data.results.res;
              setuserdata(response.data.results);
            })
            .catch(err => console.log("error", err))
    
        } catch (e) {
          console.log(e);
        }
      };
    // componentDidMount() {
    //     const res = await axios.get('https://myapi.com')
    //     this.setState({ items: res.data });
    //   }
    return (
        <div >
         <Adduser />
        </div>
    )   
  

}
