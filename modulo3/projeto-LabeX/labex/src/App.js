import AdiminHomePage from "./Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "./Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "./Pages/CreateTripPage/CreateTripPage";
import HomePage from "./Pages/HomePage/HomePage";
import ListTripsPage from "./Pages/ListTripsPage/ListTripsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TripDetailsPage from "./Pages/TripDetailsPage/TripDetailsPage";


const App = ()=> {
  return (
    <div>
      <HomePage/>
      <ListTripsPage/>
      <ApplicationFormPage/>
      <LoginPage/>
      <AdiminHomePage/>
      <TripDetailsPage/>
      <CreateTripPage/>
    </div>
  );
}

export default App;
