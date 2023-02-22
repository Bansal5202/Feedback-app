import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router,Route,NavLink,Routes,} from "react-router-dom";
import AboutUs from "./page/AboutUs";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutIconLink from "./Components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
        <Router>
      <Header />
      <div className="container">
            <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </>
                }>
        
        </Route>
        <Route path="/about" element={<AboutUs/>}/>
        </Routes>

        <AboutIconLink/>
      </div>
        </Router>
    </>
  );
}

export default App;
