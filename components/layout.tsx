
type LyoutPropsType = {
    children?: React.ReactNode
}


export const Layout = ({ children }: LyoutPropsType) => {
    return (
        <main
        className={`relative flex w-screen h-screen min-h-screen flex-col items-center justify-center  bg-white  overflow-hidden overflow-y-scroll
        `}
      >
            {/* texture image */}
            <div className="absolute h-screen w-screen top-0 left-0  backdrop-blur-lg overflow-hidden opacity-30">
                <img className=" w-full h-full  object-cover object-center" src="/form/images/agriEdge_shape.jpg" alt=""/>
            </div>
            {/* card bg */}
            <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-br opacity0  from-black/70 via-black/70 to-green-800/70 backdrop-blur-sm "></div>
        {children}
        </main>
    )
}
