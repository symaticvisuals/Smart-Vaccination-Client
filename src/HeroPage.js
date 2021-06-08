
import Login from "./Forms/Login";
import Home from "./Home/Home";
import NavBar from "./Navbar";
function HeroPage() {
  
  return (
    <div style={{ background: "#ECECF6", height: "100vh" }}>
       <NavBar />
      <Home/> 
      {/* <Login/> */}
    </div>
  );
}
export default HeroPage;
