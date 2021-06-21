
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"

export function addToCart(product){//payload gönderdiğimiz değer 
    return{
        type:ADD_TO_CART, //aksiyonumuza isim veriyoruz.Reducerların içerisinde de böyle yazılmalı
        payload:product //state'i etkileyecek olan veri
    }
}

export function removeToCart(product){
    return{
        type:REMOVE_FROM_CART, //aksiyonumuza isim veriyoruz.Reducerların içerisinde de böyle yazılmalı
        payload:product //state'i etkileyecek olan veri
    }
}