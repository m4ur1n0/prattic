// theo maurino

import { createContext, useContext, useState, useEffect } from "react"
import { getNextShow, getNextShowData } from "../lib/GetInfo";

const ShowContext = createContext({});

const ShowProvider = ({children}) => {

    // gives information about all the shows known to us via the spreadsheet.

    const [nextShowData, setNextShowData] = useState({
        next_date : "",
        next_time : "",
        date_obj : null,
        finalized : false,
        sheetName : "",
    });
    const [performersInOrder, setPerformersInOrder] = useState([]);
  
    useEffect(() => {
  
      async function loadUp() {
        const next = await getNextShow();
        if (next) {
            const {performers} = await getNextShowData(next.sheetName)
            console.log(`received ${JSON.stringify(next)}`)
            setNextShowData(next);
            setPerformersInOrder(performers);
        }
      }
  
      loadUp();
      
    }, [])


    const val = {
        nextShowData,
        setNextShowData,
        performersInOrder,
        setPerformersInOrder
    };


    return (
        <ShowContext.Provider value={val}>
            {children}
        </ShowContext.Provider>
    )

}

export function useShow() {
    return useContext(ShowContext);
}

export default ShowProvider