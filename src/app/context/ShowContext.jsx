// theo maurino

import { createContext, useContext, useState, useEffect } from "react"
import { getAllFutureShows, getNextShowData, getNextShowNameAndDate } from "../lib/GetInfo";

const ShowContext = createContext({});

const ShowProvider = ({children}) => {

    // gives information about all the shows known to us via the spreadsheet.

    const [nextShowNameAndDate, setNextShowNameAndDate] = useState(null);
    const [nextShowData, setNextShowData] = useState(null);
    const [allFutureShows, setAllFutureShows] = useState(null);
  
    useEffect(() => {
  
      async function loadUp() {

        const nextP = getNextShowNameAndDate();
        const allP = getAllFutureShows();

        const [next, futureShows] = await Promise.all([nextP, allP]);
        // console.log(`nextP : ${JSON.stringify(next)}`);
        // console.log(`futureshows : ${JSON.stringify(futureShows)}`);


        if (next) {
            const nextShow = await getNextShowData(next.sheetName, next.finalized)
            // console.log(`received ${JSON.stringify(next)}`)
            setNextShowNameAndDate(next);
            setNextShowData(nextShow);
            console.log(`NEXT SHOW : ${JSON.stringify(nextShow)}`);
        }

        if (futureShows) {
            // console.log(`LOADED FUTURES:\n ${JSON.stringify(futureShows)}`);

            setAllFutureShows(futureShows);
        } else {
            console.log("No future shows identified.")
        }
      }
  
      loadUp();
      
    }, [])


    // really shouldn't ever use these setters on the client...
    const val = {
        nextShowNameAndDate,
        setNextShowNameAndDate,
        nextShowData,
        setNextShowData,
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