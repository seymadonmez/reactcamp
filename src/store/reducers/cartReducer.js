import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems"

const initialState={
    cartItems:cartItems
}

export default function cartReducer(state=initialState,{type,payload}){
    switch (type) { //type -> gönderilen data tipi
        case ADD_TO_CART: //gönderilecek ürün add_to_cart ise ona göre işlem yapsın
            //sepette varsa adeti +1 yoksa sepete eklesin
            let product=state.cartItems.find(c=>c.product.id===payload.id)
            if (product) {//ürün var ise, ürün eklenmişse vardır
                product.quantity++; //sadece bununla sayfa güncellenmez referansı değişmediği için
                return{
                    ...state//... (spread) içerisindeki elemanları yeniden ayırarak yeni obje oluşturur. newlemek gibi
                }
            } else {//sepette daha önce bu ürün yoksa
                return{//yeni bir cartItem oluşturmam gerek
                    ...state, 
                    cartItems:[...state.cartItems,{quantity:1,product:payload}]//cartItems'ı her elemanını yeni obje haline getirir
                }
            }
            case REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems:state.cartItems.filter(c=>c.product.id!==payload.id) //1,2,3,4,5 idli ürünlerim var ve 3ü silmek istiyorum. 3 haricindeki leri bir arraye at demek burası. payload göndermek/silmek istediğimiz ürün (buradaki örnekte 3 id'li ürün)
                }
        default:
            return state;
    }
}