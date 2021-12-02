import {React, useState, useEffect} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Chat from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";
import db from './Firebase';
import { useStateValue } from "../../StateProvider";


import "./Sidebar.css";

function Sidebar() {
  const [{user}, dispatch] = useStateValue();


  const[rooms, setRooms]= useState([]);

  useEffect(()=>{
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => (
          {
              id: doc.id,
              data: doc.data()
          }
      )

      ))
  ));

  return ()=>{
    unsubscribe();
  }

  },[])

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <IconButton>
          <Avatar src={user?.photoURL} />
        </IconButton>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>{" "}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
          <div className="sidebar_searchContainer">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="search or start new chart" />

          </div>
      </div>

      <div className="sidebar_chats">
          <SidebarChat addNewChat />
          {rooms.map(room =>{
            return (
              <SidebarChat key={room.id}
              id={room.id}
              name={room.data.name}/>
            )
          })}

          

      </div>
    </div>
  );
}

export default Sidebar;
