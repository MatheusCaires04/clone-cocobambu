import ContainerMap from "./components/ContainerMap";
import ContainerReleases from "./components/ContainerReleases";
import ContainerRequests from "./components/ContainerRequests";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContainerRequests />
      <ContainerMap />
      <ContainerReleases />
      <Footer />
    </>
  );
}

export default App;
