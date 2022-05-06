import React, { useEffect, useState } from 'react';
import styled from "styled-components";
function Static () {

    useEffect(() => {
      fetchFromLocal()
    }, [])
    
    const [expPrice, setExpPrice] = useState(0)
    const [Data, setData] = useState({})
    const [Price, setPrice] = useState(0)
    const [Days, setDays] = useState(0)
    function fetchFromLocal() {
        let expprice = localStorage.getItem("estPrice")
        expprice = JSON.parse(expprice)
        setExpPrice(expprice)
        let data = localStorage.getItem("bookingData")
        data = JSON.parse(data)
        setData({...data})
        let price = localStorage.getItem("price")
        price = JSON.parse(price)
        setPrice(price)
        let days = localStorage.getItem("days")
        days = JSON.parse(days)
        setDays(days)
    }

  return (
    <Div>
        <div className='call'>
          <p><i class="material-icons">phone_in_talk</i>For booking assistance, call (1) 888-382-8909</p>
          <div className='smalltext'>
              <p>Rental Number: 2739481</p>
          </div>
        </div>
        <div className='big-wala'>
        <div className='listingDiscount'>
            <h4>Beautiful Condo 100 yards from Gated Beach Access</h4>
            <p>Destin, FL, US</p>
        <div className='discount'>
            <h5>New listing discount<i class="material-icons">privacy_tip</i></h5>
        </div>
        <div className='table'>
        <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" defaultValue={Data.checkin} />
          </div>

          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date"
            defaultValue={Data.checkout}
           />
          </div>
          
        </div>
        <input
                  style={{ height: "40px",margin: "2px" }}
                  type="Number"
                  placeholder="Guest"
                  name="Guest"
                  className="form-control"
        />
        
        <div className="content">
            <div className="content2">
                <p>${Price} x {Days} nights</p>
            </div>
            <div className='content3'>
                ${expPrice}.00
            </div>
        </div>


        <div className="content4">
            <div className="content5">
                <p>New Listing Discount (20%)</p>
            </div>
            <div className='content6'>
               -${expPrice - (expPrice*0.2)}
            </div>
        </div>

        <div className="content7">
            <div className="content8">
                <p>Cleaning Fee</p>
            </div>
            <div className='content9'>
               $200.00
            </div>
        </div>

        <div className="content10">
            <div className="content11">
                <p>Service Fee</p>
            </div>
            <div className='content12'>
               $499.00
            </div>
        </div>

        <div className="content13">
            <div className="content14">
                <p>Tax</p>
            </div>
            <div className='content15'>
                $364.00
            </div>
        </div>

        <hr/>


        <div className="content16">
            <div className="content17">
                <p>Total</p>
            </div>
            <div className='content18'>
                ${expPrice  + 364 + 499 + 200  -(expPrice - (expPrice*0.2))}
            </div>
        </div>
        </div>
        <hr/>


       

        </div>

        <div className='payementProtection'>
          <h4>Payment Protection</h4>
          <p>Book & Pay on Vrbo and get:</p>
          <div className="protect"></div>
          <p><i class="material-icons">done</i>Comprehensive Payment Protection</p>
          <p><i class="material-icons">done</i>Emergency Booking Assistance</p>
          <p><i class="material-icons">done</i>24hr Customer Service</p>
       </div>

    </Div>
  )
}

export default Static


const Div = styled.div `
background-color: #f5f4f3;
padding-top:2%;
.call{
    background-color:white;
    width:450px;
    margin-right:100px;
    margin-bottom:2%;
    margin-top:18%;
}

.call .material-icons{
    margin-bottom:-2%;
    font-size:50px;
}
.call p{
    margin-top:2%;
}
.smalltext {
    margin-left:9%;
   
}

.big-wala{
    background-color:white;
    width:450px;
   
    margin-top:2%;
    margin-left:2%;
    padding-left:2%;
}

.listingDiscount{
    margin-top:5%
}

.listingDiscount h4{
    margin-top:-2%;
    margin-bottom:2%
}

.discount h5{
    color:green;
    margin-bottom:2%;
}

.discount .material-icons{
    font-size:15px;
    color:black;
    margin-left:5%;
    margin-bottom:2%;
}



.table{
    display:flex;
    border:1px solid black;
    heigth:50%;
    width:80%;
    gap:5%;
    margin-bottom:2%;
}

.content{
    display:flex;
    gap:32%;
}

.content4{
    display:flex;
    gap:7%;
}



.content7{
    display:flex;
    gap:32%;
}

.content10{
    display:flex;
    gap:34.3%;
}

.content13{
    display:flex;
    gap:47.5%;
}

.content16{
    display:flex;
    gap:45%;
}

.payementProtection{
    width:450px;
    background-color:white;
    margin-top:2%;
    margin-left:2%;
}

.payementProtection h4{
     margin-left:2%;
     padding-top:2%;
}

.payementProtection p{
    margin-left:2%;
    padding-top:2%;
}

.protect .material-icons{
    font-size:12px;
    background-color:blue;
    margin-bottom:1%;
}




`