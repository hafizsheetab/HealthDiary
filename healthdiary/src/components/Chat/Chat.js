import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getToken, getUser } from '../Utility/localStorageAPI'
import './chatstyle.css'
function Chat() {
  const [allMessages, setAllMessages] = useState([])
  const[text, setText] = useState("")
  let {receiverId} = useParams()
  const [messages, setMessages] = useState([])
  React.useEffect(() => {
    async function fetchData(){
        axios.defaults.headers.common['x-auth-token']=getToken()
        let response = await axios.get(`http://localhost:5000/api/message/sent/${receiverId}`)
        response.data.map(message => addMessage(message))
        response = await axios.get(`http://localhost:5000/api/message/received/${receiverId}`)
        response.data.map(message => addMessage(message))
        setMessages(state => {
          setAllMessages(state)
          return[...state]
        })
    }
    fetchData()
  },[allMessages])
  const addMessage = (newMessage) => setMessages(state => {
      console.log(containsObject(newMessage, state))
      if(containsObject(newMessage, state)){
        return [...state]
      }
      else{
        return [...state, newMessage]
      }
      
    
    
  })
  function containsObject(obj, list) {
    var x;
    for (x in list) {
        if (list.hasOwnProperty(x) && list[x]._id.toString() === obj._id.toString()) {
            return true;
        }
    }

    return false;
}
const handleSubmit = (e) => {
  axios.defaults.headers.common['x-auth-token']=getToken()
  axios.post(`http://localhost:5000/api/message/${receiverId}`,{
    text
  }).then(function(response){
    console.log(response)
  })
}
    return (
        <>
    <div className="page-content page-container" id="page-content">
  <div className="padding">
    <div className="row container d-flex justify-content-center">
      <div className="col-md-6">
        <div className="card card-bordered">
          <div className="card-header">
            <h4 className="card-title"><strong>Health Diary</strong></h4> 
          </div>
          <div className="ps-container ps-theme-default ps-active-y" id="chat-content" style={{overflowY: 'scroll !important', height: '400px !important'}}>
            {(messages.sort((a,b) => {
        let date1 = new Date(a.time)
        let date2 = new Date(b.time)
        if(date1 > date2){
          return 1
        }
        else {
          return (-1)
        }
      })) && messages.map(message => (
              message.receiver._id.toString() === getUser()._id ? (
              <div className="media media-chat ">
              <div className="media-body">
                <p>{message.text}</p>
              </div>
            </div>):(<div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>{message.text}</p>
              </div>
            </div>)
            ))}
           
            <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 0}}>
              <div className="ps-scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} />
            </div>
            <div className="ps-scrollbar-y-rail" style={{top: 0, height: 0, right: 2}}>
              <div className="ps-scrollbar-y" tabIndex={0} style={{top: 0, height: 2}} />
            </div>
          </div>
          <div className="publisher bt-1 border-light"> <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." /> <input className="publisher-input" type="text" placeholder="Write something" value = {text} onChange = {(e) => setText(e.target.value)}/> <span className="publisher-btn file-group"> <i className="fa fa-paperclip file-browser" />  </span> <a className="publisher-btn" href="#" data-abc="true"><i className="fa fa-smile" /></a> <a className="publisher-btn text-info" href="#" data-abc="true"><i className="fa fa-paper-plane" /></a> </div>
          <button type="submit"className="button chat_btn" onClick = {handleSubmit} >Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
 
        </>
    )
}

export default Chat
