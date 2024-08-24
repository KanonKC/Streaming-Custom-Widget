import { useEffect, useState } from "react"
import EventList from "../components/EventList"
import { getAllTwitchChannelPointRedeemed } from "../services/StreamManagementServer.service"
import socket from "../socket-client"

const EventListPage = () => {

    const [eventList, setEventList] = useState<string[]>([])

    const load = () => getAllTwitchChannelPointRedeemed({
        limit: -6
    }).then((response) => {
        setEventList(response.data.data.map((redeemLog) => (`${redeemLog.username} redeemed ${redeemLog.rewardName} (${redeemLog.rewardCost})`)))
    })

    useEffect(() => {
        load()
        socket.on("reloadTwitchChannelPointRedeemedLog", load)

        return () => {
			socket.off("reloadTwitchChannelPointRedeemedLog");
		}
    },[])

    return (
        <div className="">
            <EventList eventList={eventList}/>
        </div>
    )
}

export default EventListPage