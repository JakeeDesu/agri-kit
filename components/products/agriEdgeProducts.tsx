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
        <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-10 w-full h-full px-4 py-8 max-w-4xl transition-all duration-1000 ease-in-out overflow-y-scroll`}>
            {products.map((product, index) => (
                <ProductCard key={index} title={product.title} image={product.image}/>
            ))}
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
                {/* card bg */}
                <div className="absolute top-0 left-0 w-full h-full  rounded-sm backdrop-blur-md p-0 m-0 ring-1 ring-white bg-white/70 shadow-md hover:shadow-2xl shadow-white/30 hover:shadow-white/40 transform-gpu transition-all duration-200  ease-out "></div>
                <div className="relative flex flex-col justify-start items-center p-4">
                    <div className="h-24 w-24 overflow-hiddenbg-white/40">
                        <img className="w-full h-full object-contain object-center" src={image} alt=""/>
                    </div>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}