import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { db } from './firebase.js'
import InputOption from './InputOption'
import Post from './Post'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Feed() {

  const [posts, setPosts] = useState([]);

  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id, 
          data: doc.data(),
        }
      )
      ))
    })
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      name: user.displayName, 
      description: user.email, 
      message: input,
      photoUrl: user.photoUrl || "", 
      timestamp: serverTimestamp(),
    }).then(docRef => {
      console.log("Data added successfully: ", docRef);
      setInput("");
    }).catch(e => {
      console.log("Error while adding doc: ", e);
    })
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className="feed__input">
            <Create />
            <form>
              <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
              
              <button  type="submit" onClick={sendPost}>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color={"#7085F9"}/>
          <InputOption title="Video" Icon={Subscriptions} color={"#E7A33E"}/>
          <InputOption title="Event" Icon={EventNote} color={"#C0C8CD"}/>
          <InputOption title="Write article" Icon={CalendarViewDay} color={"#7FC15E"}/>
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: {name, description, message, photoUrl} }) => (
        <Post 
          key = {id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
        )
      )}
    </div>
  )
}

export default Feed