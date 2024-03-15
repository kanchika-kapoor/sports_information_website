export type apiOptions = {
    next: any,
    headers: {
        "X-Auth-Token": string
        "Content-Type": string
    }
}

export type matchesType = {
    area: matchesArea,
    competition: matchesCompetiton,
    id:number,
    utcDate: string,
    status: string,
    matchday?: number,
    homeTeam?: matchesTeam,
    awayTeam?: matchesTeam,
    score?: scores
}

export type matchesArea = {
    id?: number,
    name: string,
    code: string,
    flag: string
}

export type matchesCompetiton = {
    id?: number,
    name: string,
    code: string,
    type: string,
    emblem: string
}

export type matchesTeam = {
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string
}


export type scores = {
    fullTime: {
        home: number,
        away: number
    },
    halfTime: {
        home: number,
        away: number
    }
}