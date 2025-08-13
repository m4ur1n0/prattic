// theo maurino

import { createContext, useContext, useState, useEffect } from "react"
import { getAllFutureShows, getNextShow, getNextShowData } from "../lib/GetInfo";

const ShowContext = createContext({});

const ShowProvider = ({children}) => {

    // gives information about all the shows known to us via the spreadsheet.

    const [nextShowData, setNextShowData] = useState({});
    const [nextPerformersInOrder, setNextPerformersInOrder] = useState([]);
    const [allFutureShows, setAllFutureShows] = useState([]);
  
    useEffect(() => {
  
      async function loadUp() {

        const nextP = getNextShow();
        const allP = getAllFutureShows();

        const [next, futureShows] = await Promise.all([nextP, allP]);

        if (next) {
            const {performers} = await getNextShowData(next.sheetName)
            // console.log(`received ${JSON.stringify(next)}`)
            setNextShowData(next);
            setNextPerformersInOrder(performers);
        }

        if (futureShows) {
            console.log(`LOADED FUTURES:\n ${JSON.stringify(futureShows)}`);

            setAllFutureShows(futureShows);
        } else {
            console.log("No future shows identified.")
        }
      }
  
      loadUp();
      
    }, [])


    // really shouldn't ever use these setters on the client...
    const val = {
        nextShowData,
        setNextShowData,
        nextPerformersInOrder,
        setNextPerformersInOrder,
        allFutureShows,
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