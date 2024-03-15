'use client'

import React, {useState} from "react";
import {matchesType} from '@/types'

import LeagueTable from './LeagueTable'

interface Props{
    matchesList: matchesType[]
    matchesListFinished: matchesType[]
}

const Status:React.FC<Props> = ({matchesList, matchesListFinished})=>{
    const [statusMatch, setStatusMatch] = useState<string>('TODAY')

    return (
        <div>
            <div className="flex space-x-4 mb-2 md:mb-4">
                <button className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch == 'TODAY'? 'bg-teal-400 font-semibold': 'bg-slate-500 font-regular'}`} onClick={()=> setStatusMatch("TODAY")}>Today</button>

                <button className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch == 'FINISHED'? 'bg-teal-400 font-semibold': 'bg-slate-500 font-regular'}`} onClick={()=> setStatusMatch("FINISHED")}>Finished</button>
            </div>

            <div className="w-full">
                {statusMatch == 'TODAY'?(
matchesList.map((data)=>{
    return (
        <div key={data.id}>
            {data.status == 'TIMED' && (
                <LeagueTable data={data}/>
            )}
        </div>
    )
})
                ):null}

{statusMatch == 'FINISHED'?(
matchesList.map((data)=>{
    return (
        <div key={data.id}>
            {data.status == 'FINISHED' && (
                <LeagueTable data={data}/>
            )}
        </div>
    )
})
                ):null}

{statusMatch == 'TODAY'?(
matchesListFinished.map((data)=>{
    return (
        <div key={data.id}>
            {data.status == 'TIMED' && (
                <LeagueTable data={data}/>
            )}
        </div>
    )
})
                ):null}


{statusMatch == 'FINISHED'?(
matchesListFinished.map((data)=>{
    return (
        <div key={data.id}>
            <LeagueTable data={data}/>
        </div>
    )
})
                ):null}





            </div>
        </div>
    )
}




export default Status