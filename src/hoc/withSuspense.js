import { Suspense } from "react"
import Loader from "../component k2/loader"

function withSuspense(Component){
    return (props)=>{
        return <Suspense fallback={<Loader />}> <Component {...props} /> </Suspense>
    }
}

export default withSuspense