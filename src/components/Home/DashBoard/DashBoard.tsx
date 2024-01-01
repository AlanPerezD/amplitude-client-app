import React from 'react'
import { 
  DailyUser, AverageSession, EventRealTime, LocationRealTime, NewUser, SessionReplay, UserPerCountry, UserRealTime 
} from '../../index'

type Props = {}

const DashBoard = (props: Props) => {
  return (
    <div>
      <DailyUser />
      <AverageSession />
      <EventRealTime />
      <LocationRealTime />
      <NewUser />
      <SessionReplay />
      <UserPerCountry />
      <UserRealTime />
    </div>
  )
}

export default DashBoard