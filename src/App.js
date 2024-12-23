import "./App.css";
import Main from "./components/Main";
import BookingPage from "./components/BookingPage";
import ContentContainer from './components/ContentContainer'
import ConfirmedBooking from "./components/ConfirmedBooking";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentContainer Content={Main} />} />
        <Route path="/booking" element={<ContentContainer Content={BookingPage} />} />
        <Route path="/booking-confirmed" element={<ContentContainer Content={ConfirmedBooking} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
