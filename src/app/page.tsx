import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
    <div className="navbar">
      <Header/>
    </div>
     <Footer/>
     </div>
  );
}
