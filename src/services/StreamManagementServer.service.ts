import axios, { AxiosPromise } from "axios";
import { ListAPIQuerystringOprions, ListAPIResponse, TwitchChannelPointRedeemedLog } from "../types/StreamManagementServer.type";

const { VITE_STREAM_MANAGEMENET_SERVER_BASE_URL } = import.meta.env

export async function getAllTwitchChannelPointRedeemed(options?: ListAPIQuerystringOprions): AxiosPromise<ListAPIResponse<TwitchChannelPointRedeemedLog>> {
    return axios.get(`${VITE_STREAM_MANAGEMENET_SERVER_BASE_URL}/twitch/channel-point-redeemed`, {
        params: options
    })
}