import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Input from '@material-tailwind/react/Input';
import Modals from './Modals';
import { useState } from 'react';
import axios from 'axios';

import {api} from '../helper';

export default function MenusCard(){

   const [showModal, setShowModal] = useState(false)
   const [selectedFile, setSelectedFile] = useState("")

   const [data, setData] = useState({})

   const handleFileInput = (e) =>{
      e.preventDefault()
      
      setSelectedFile(URL.createObjectURL(e.target.files[0]))

      let file = e.target.files[0]
      
      setData({...data,"file":file})
   }

   const doUpload = async ()=>{
      await api.get("/menus",data)
         .then(res => {
            console.log(res.data)
            setShowModal(false)
         }).catch(err => {
            console.log("Error : ",err)
         })
      // console.log("HELLO UPLOAD")
   }

   return(
      <>
         <Card>
            <CardHeader color="blue" contentPosition="none">
                  <div className="w-full flex items-center justify-between">
                     <h2 className="text-white">Menus</h2>
                     <Button
                        color="indigo"
                        buttonType="filled"
                        size="regular"
                        onClick={(e)=> setShowModal(true)}
                     >
                        Add Menu
                        <Icon name="add" size="sm"/>
                     </Button>
                  </div>
            </CardHeader>
            <CardBody>
                  <div className="overflow-x-auto">
                     <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                              <tr>
                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    ID
                                 </th>
                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                 </th>
                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Salary
                                 </th>
                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Country
                                 </th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    1
                                 </th>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Dakota Rice
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $36,738
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Niger
                                 </td>
                              </tr>
                              <tr>
                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    2
                                 </th>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Minerva Hooper
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $23,789
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Curaçao
                                 </td>
                              </tr>
                              <tr>
                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    3
                                 </th>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Sage Rodriguez
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $56,142
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Netherlands
                                 </td>
                              </tr>
                              <tr>
                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    4
                                 </th>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Philip Chaney
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $38,735
                                 </td>
                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Korea, South
                                 </td>
                              </tr>
                        </tbody>
                     </table>
                  </div>
            </CardBody>
         </Card>

         <Modals size="regular" title="Menus" showModal={showModal} setShowModal={setShowModal} upload={doUpload}>
            <div className="flex-col md:flex-row container p-2">
               <form className="flex-col gap-4">
                  <div className="mb-4">
                     <Input
                        type="text"
                        color="lightBlue"
                        size="regular"
                        outline={false}
                        placeholder="Name"
                        onChange={(e)=>setData({...data,"name": e.target.value})}
                     />
                  </div>
                  <div className="mb-4">
                     <Input
                        type="text"
                        color="lightBlue"
                        size="regular"
                        outline={false}
                        placeholder="Category"
                        onChange={(e)=>setData({...data,"category": e.target.value})}
                     />
                  </div>
                  <div className="mb-4">
                     <Input
                        type="text"
                        color="lightBlue"
                        size="regular"
                        outline={false}
                        placeholder="Price"
                        onChange={(e)=>setData({...data,"price": parseInt(e.target.value)})}
                     />
                  </div>
                  <input 
                     className="mt-4"
                     onChange={(e)=>handleFileInput(e)}
                     type="file"
                  />
                  {selectedFile!==""&&(
                     <>
                        <img
                           src={selectedFile}
                           alt="menu"
                           className="mt-4 max-w-screen-sm"
                           style={{width:"100%", height: "320px"}}
                        />
                     </>
                     )
                  }
               </form>
            </div>
         </Modals>
      </>
   )
}