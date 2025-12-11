

export const Container = ({children,className}:{children:React.ReactNode, className:string})=>{

    return(
        <>

        <div className="mx-auto max-w-7xl">
            {children}
        </div>
        
        
        </>
    )
}