import ContainerMap from "./components/ContainerMap";
import ContainerReleases from "./components/ContainerReleases";
import ContainerRequests from "./components/ContainerRequests";
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
    </>
  );
}

export default App;
