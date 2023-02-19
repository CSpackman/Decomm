import Image from 'next/image'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { CheckoutObject } from './NikeBag'
import { ItemsData } from './NikeBag'

import { useCookies } from 'react-cookie';
import {Cookies} from 'react-cookie'
export default function NikeItem() {
    const thisData = {} as ItemsData
    thisData.ImgUrl = "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409"
    thisData.Price = 0.09;
    thisData.Title = "Nike Dunk Low Panda";
    thisData.Quantity = 1
    const [cookies, setCookie, removeCookie] = useCookies(['cart']);
    const cookiesObject = new Cookies();
    
    function updateCart(){
        var cart = {} as CheckoutObject
        if(cookiesObject.get('cart')!= undefined){
            console.log("cart exists")
            cart = cookiesObject.get('cart')
            cart.TotalCartValue += thisData.Price;
            var itemDuplicate
                    for(var i=0; i<cart.Items.length; i++){
                        if(cart.Items[i].Title == thisData.Title){
                            cart.Items[i].Quantity+=1;
                            itemDuplicate = true;
                        }
                    }
                    if(!itemDuplicate){
                        cart.Items.push(thisData);
                    }
        }else{
            cart.TotalCartValue = thisData.Price;
            cart.MerchantAddress = "1234567"
            var items = [];
            items.push(thisData)
            cart.Items=items;
            console.log("cart created")

        }
        setCookie("cart",cart, { path: '/' })
        
    }
    // function updateCart (){
    //     var cartObject = {} as CheckoutObject
    //     cartObject.MerchantAddress = "12345678"
    //     var items = [];
    //     var doesCartExist:boolean= true
    //     try{
    //         var data = JSON.parse(document.cookie)
    //         console.log("1"+data)
    //     }catch{
    //         doesCartExist = false;
    //     }

    //     if(doesCartExist){
    //         cartObject.TotalCartValue = thisData.Price;
    //         items.push(thisData)

    //     }else{
    //         cartObject = JSON.parse(document.cookie)
    //         console.log("cart exists", cartObject)
    //         cartObject.TotalCartValue += thisData.Price;
    //         var itemDuplicate
    //         for(var i=0; i<cartObject.Items.length; i++){
    //             if(cartObject.Items[i].Title == thisData.Title){
    //                 cartObject.Items[i].Quantity+=1;
    //                 itemDuplicate = true;
    //             }
    //         }
    //         if(!itemDuplicate){
    //             items.push(thisData);
    //         }
    //     }
    //     cartObject.Items = items;

    //     const newCookie = JSON.stringify(cartObject)
    //     document.cookie = newCookie;
    //     console.log("total value"+cartObject.TotalCartValue)
    //     console.log(newCookie);
    // }
  return (
    <div className='bg-white rounded-md w-64 flex flex-col align-middle p-4 m-4 -z-1 border-2 border-slate-200'>
        <div>
            <img 
                src='https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633027409'
                width={200}  
                height={200} 
                alt='Nike Dunk Low Retro White Black 2021' 
                className='self-center'
            />
        </div>
        <div>
            <p className='text-red-400 font-semibold' >Just In</p>
            <p className='font-bold text-lg'>Nike Dunk Low Pandas</p>
            <p className='text-md text-gray-500'>Mens Shoes</p>
            <p className='text-md'>Size: 13</p>
            <div className='flex items-center mt-2'>
                <FaEthereum className='text-black-500 mr-2' size={15} />
                <p className='font-bold'>{0.09} ETH</p>
            </div>
        </div>
        <div className='bg-black text-white flex items-center align-middle justify-center py-2 mt-4 rounded-md'>
            <button onClick={() => {
                alert("Added to Bag")
                updateCart();
            }}>Add to Bag</button>
        </div>
    </div>
  )
}
