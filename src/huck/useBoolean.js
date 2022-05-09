import { useState } from "react";

function useBoolean(init_value){
let [value,setValue] = useState(init_value)

function setBoolean(){
    setValue(!value)
}

return [value,setBoolean]

}

export default useBoolean