import { useContext, useEffect, useState } from "react";
import { G_Context } from "../contexts/globalContext";

type ProductType = {
    title : string
    image? : string
    pdf : string
}

const products: ProductType[] = [
    {
        title : "fertyEdge",
        image : "/products/images/Ferti.svg",
        pdf : "/pdf-reader/FertiEdge.pdf"
    },
    {
        title : "aquaEdge",
        image : "/products/images/Aqua.png",
        pdf : ""
    },
    {
        title : "et0",
        image : "/products/images/ET0.png",
        pdf : ""
    },
    {
        title : "Yield",
        image : "/products/images/Yield.svg",
        pdf : ""
    },
    {
        title : "phyto",
        image : "/products/images/phyto.svg",
        pdf : ""
    },
    {
        title : "cattle",
        image : "/products/images/cattle.png",
        pdf : ""
    },
    {
        title : "Soo9",
        image : "/products/images/Soo9.png",
        pdf : ""
    },
]


export const AgriEdgeProducts = () => {

    const context = useContext(G_Context)
    const isVisible = context.onDisplay == 1

    return (
        <div className="w-screen h-screen flex justify-center items-start overflow-y-scroll p-4 py-2 ">
            <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 py-8 w-full max-w-4xl h-full rounded-sm ring-1 md:ring-0 ring-white bg-black/5 md:bg-black/0 backdrop-blur-lg md:backdrop-blur-none   transition-all duration-1000 ease-in-out overflow-y-scroll `}>
                {products.map((product, index) => (
                    <ProductCard key={index} title={product.title} image={product.image}/>
                ))}
            </div>

        </div>
    )
}

type productPropsType = {
    title : string
    image? : string
}

const ProductCard = ({title, image}:productPropsType) => {
    const context = useContext(G_Context)
    
    const goToPdf = () => {
        context.changeDisplay(2)
    }

    const clickHandler = (e:any) => {
        goToPdf()
    }

    return (
        <div className=" h-full w-full flex justify-center items-center"
            onClick={clickHandler}
        >
            <div className="relative h-full w-full flex justify-center items-center cursor-pointer ">
                <div className="relative h-48 w-48  flex flex-col justify-start items-center p-4 m-10 bg-white  rounded-full shadow-sm ">
                    <div className="h-full w-full p-4 overflow-hidden ">
                        <img className="w-full h-full object-contain object-center" src={image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}