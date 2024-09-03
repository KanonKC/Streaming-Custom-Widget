import EventListItem from './EventListItem'

const EventList = ({
    eventList=[]
}: {
    eventList?: string[]
}) => {
  return (
    <div className='flex flex-col-reverse opacity-70'>
        {
            eventList.slice(0, 6).map((event, index) => (
                <EventListItem key={index} fontColorLevel={index+1} highlight={index+1 === 6}>{ event }</EventListItem>
            ))
        }
    </div>
  )
}

export default EventList