// theo maurino

import { createContext, useContext, useState, useEffect } from "react"
import { getAllFutureSignups, getNextShowData, getNextShowNameAndDate, getAllFutureShowNameAndDate } from "../lib/GetInfo";

const ShowContext = createContext({});

const ShowProvider = ({children}) => {

    // gives information about all the shows known to us via the spreadsheet.

    const [nextShowNameAndDate, setNextShowNameAndDate] = useState(null);
    const [nextShowData, setNextShowData] = useState(null);
    const [allFutureSignups, setAllFutureSignups] = useState(null);
    const [futureShowsData, setFutureShowsData] = useState(null);
  
    useEffect(() => {
  
        async function loadUp() {

            const nextP = getNextShowNameAndDate();
            const allP = getAllFutureSignups();
            const fShowData = getAllFutureShowNameAndDate();

            const [next, futureSignups] = await Promise.all([nextP, allP]);
            // console.log(`nextP : ${JSON.stringify(next)}`);
            // console.log(`futureSignups : ${JSON.stringify(futureSignups)}`);


            if (next) {
                const nextShow = await getNextShowData(next.sheetName, next.finalized)
                // console.log(`received ${JSON.stringify(next)}`)
                setNextShowNameAndDate(next);
                setNextShowData(nextShow);
                // console.log(`NEXT SHOW : ${JSON.stringify(nextShow)}`);
            }

            if (futureSignups) {
                // console.log(`LOADED FUTURES:\n ${JSON.stringify(futureSignups)}`);

                setAllFutureSignups(futureSignups);
            } else {
                console.log("No future shows identified.")
            }

            let realShowsFuture = await fShowData;
            if (realShowsFuture) {
                setFutureShowsData(realShowsFuture);
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
        allFutureSignups,
        futureShowsData
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