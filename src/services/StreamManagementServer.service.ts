import axios, { AxiosPromise } from "axios";
import { ListAPIQuerystringOprions, ListAPIResponse, TwitchChannelPointRedeemedLog } from "../types/StreamManagementServer.type";

export async function getAllTwitchChannelPointRedeemed(options?: ListAPIQuerystringOprions): AxiosPromise<ListAPIResponse<TwitchChannelPointRedeemedLog>> {
    return axios.get('http://localhost:8080/twitch/channel-point-redeemed', {
        params: options
    })
}