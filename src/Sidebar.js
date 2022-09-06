import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"

function Sidebar() {


  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  const user = useSelector(selectUser);

  return (
    <div className = "sidebar">
      <div className="sidebar__top">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAuAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAACAwQAAQUGB//EAB8QAAMBAAMAAwEBAAAAAAAAAAABAgMREiETMWFRBP/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAQQFAAcG/8QAHREAAwEAAwEBAQAAAAAAAAAAAAECAxESEyEEMf/aAAwDAQACEQMRAD8AlX2PyEpelGaKjk9Lt/CjNFWZPmimFwKaKljk+Ea5A7GT6+CFAngZC7MtxzFYZl+MAWV9LCzgpiDM4KYgr0ULsGYGKBkwMUiis7EqDfQeoM6ndQO4hwC4KeoLkLqT3J+gLgpcguQlIXYlcC6grcgVIakYrI6gTcF1R4JuQ1I2bInBooqTA+o30PCyvSjNCIKYL1I+htlGaG8i48RvkX1KrXLCTKcJ/pPmuWX4STS4QrR8IpxguygRjJblJVtGZrQ3OSiJBzkoiRDRRujJkYp4CmRnUHqV3QrqZ1G9TTkJSRyK4NORvU1wEpJ5EtAtDmgWguA0xLkCpHMXYagLvwIpCLRRbJ7GzB3qT2jDdmDVB3qeFgpz+yfNFMeFipPsbG8mcgchT6zlAllX+eTo4SR/55OhihdopbUV4yW5STYotyRUqTL1Y/OSiJF5oohCnJSthSg+ApkPqRwV3QvgGkN4AoJSd2FtAtBVQuqGKCe6NMCmZVCqoYoBeplMVTN1QqqGrMW9gbYi2HdCbodOYHqLp+mAt+mDOnAc6fDxeY9PwRmN5DcnoNB8jcVyxCZRh9hdRVfEdDBHRxRBgvDoYle5MzZluSLMkSY/RZkVqkzdSrMpjglikkNViunJna2pKpYfPhNNjO/hPmZ9/o+m6oVVGroTVDJzA9wqoVVA1YurHTmd7BVQuqAqxdWNWYPqHVCaoGrF1Y6cwXobuhF0ZdiLsdOYPoHyYJ7GB+Y+b+HlIDFQw+QVB6e0MllmBHP2W4cBVPwRp/Do4F+JzsaSLM7K1wZO9JHSyaRRGhzo0GzqK8jF/TukdBaDJsgnTkdNkeRhbbtl86BvTwinQP5CPMoXqOqxV2LrQVVjJzBWoyrFVYFWKqxs5hegyrFVYFWLqxyzJ9A6sVdgVYuqHTmd3N3Yl0aqhbocoJVhujYpswLoWpr4eZVeBqyXvwErAWZ6rVormyzGzlzZXlpwE8vhn77fDq5WVRocvPQfGv6LeJgfq3OnOo2NDnRpyPz0BeJ87+jbk6UWOjQ58aDp0FPMzNNC9aG/kZHOn6F8n6R5lOrKXYurEPT9BrQNZgqxtWKqxdWKqxizGKxrsCrFOwXY1QH3DqxdUA6AdDVBPYJsFs1ya9DU8BSzHRs11MC4Lab4PGuwlZI79NrQZOR6bpqWzfpTnocydB8a/ozxMj9O/wAOrGo+NDl56FWVkeJ89+nVs6edlGehzs7HxoKrIx9bOlGg6dDnzoMnX9EvIoaUXrQL5CJafoXyfoPmVaZV3BrQm+T9BehKzITHvT9F1YmrA7jFmNlj3YPcS7Ndw1A1Ma6Nci+xtMLqEhi9DSAgdILH5o1wYMU8mweS4l8PmVWYtBFNgps1JzR9xro+CtaD875IJZVmx3RGPvbZ0M7Ks7OfmymGA4Rj7M6EWPiyGGPhiqhGZqy2dBs6EUt8DJbEuEUbZZOgXyEibCTf9A80V2UfIaeghs02/wCndEShr0B7iW2CmwuqHyijuZ3EJhJnORyQ9UMliEHJDQ1Iomh8V/SWR0iqQ2fhbkpb+0YKj6MENfRy/R1+NH//2Q==" alt=""/>
        <Avatar className="sidebar__avatar" src = {user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2543</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2543</p>
          </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  )
}

export default Sidebar