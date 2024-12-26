import React from 'react'
import NavHeader from './NavHeader'
import { FaCartShopping } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import Table from 'react-bootstrap/Table';


function Home({Toggle}) {
  return (
    <div className='px-3'>
      <NavHeader Toggle={Toggle}/>
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
            <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2'>230</h3>
                        <p className='fs-5'>Products</p>
                    </div>
                    <FaCartShopping className='fs-5'/>
                </div>
            </div>

            <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2'>2450</h3>
                        <p className='fs-5'>Sales</p>
                    </div>
                    <FcSalesPerformance  className='fs-5'/>
                </div>
            </div>

            <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2'>20%</h3>
                        <p className='fs-5'>Increase</p>
                    </div>
                    <MdOutlineFormatIndentIncrease className='fs-5'/>
                </div>
            </div>

            <div className='col-md-3 p-1'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2'>2250</h3>
                        <p className='fs-5'>Delivery</p>
                    </div>
                    <CiDeliveryTruck className='fs-5'/>
                </div>
            </div>
        </div>
      </div>

      <Table className='table caption-top bg-white mt-2 rounded ' >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Lisa</td>
          <td>David</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Home