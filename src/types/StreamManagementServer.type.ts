export interface ListAPIResponse<T> {
    data: T[],
    total: number,
    limit?: number,
    offset?: number
}

export interface ListAPIQuerystringOprions {
    limit?: number,
    offset?: number
}

export interface TwitchChannelPointRedeemedLog {
    id: number
    userId: string
    username: string
    rewardId: string
    rewardName: string
    rewardCost: number
    rewardPrompt: string | null
    timestamp: number
}