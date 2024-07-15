import { createContext } from "react";
// import imageProduct1 from '../images/imageProduct1.jpg'
// import imageProduct2 from '../images/imageProduct2.jpg'
// import imageProduct3 from '../images/imageProduct3.jpg'
// import imageProduct4 from '../images/imageProduct4.jpg'


 type typeContext  = {
    showBackground: boolean
    onOpen?: () => void;
    // onClose?: () => void;
    // images?: any[]
}

export const buttonContext =  createContext<typeContext>({
    showBackground: false,
    onOpen:() => {},
    // onClose: () => {},
    // images: [imageProduct1, imageProduct2, imageProduct3, imageProduct4]
})
