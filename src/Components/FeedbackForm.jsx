import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import { useContext,useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {

  const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

  const [text, setText] = useState("");
const [btnDisabled,seBtnDisabled]=useState(true)
const [message,setMessage]=useState('')
const [rating,setRating]=useState(10)

useEffect(()=>{
if(feedbackEdit.edit===true){
  seBtnDisabled(false)
  setText(feedbackEdit.item.text)
  setRating(feedbackEdit.item.rating)
}
},[feedbackEdit])

  const handleTextChange = (e) => {

    if(text===''){
      seBtnDisabled(true)
      setMessage(null)
    }
    else if(text !=='' && text.trim().length <= 10){
seBtnDisabled(true)
setMessage('Text must be at least 10 characters')
    }
    else{
      setMessage(null)
      seBtnDisabled(false)
    }


    setText(e.target.value);
  };
const handleSubmite=(e)=>{
e.preventDefault()
if(text.trim().length>10){
 const newFeedback={
  text,
  rating,
 }
if(feedbackEdit===true){
 updateFeedback(feedbackEdit.item.id.newFeedback)
}
else{
  addFeedback(newFeedback)

}
 setText('')
}
}
  

  return (
    <Card>
      <form onSubmit={handleSubmite}>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect select={(rating)=>setRating(rating)}/>
      <div className="input-group">
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="write a review"
          value={text}
        />
        <Button type="submit" isDisabled={btnDisabled}>send</Button>
      </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
