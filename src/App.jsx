import './App.css';
import Header from "./Component/Header"
import Entry from './Component/Entry';
import data from "./data"

 function App() {
  const entryElement = data.map((entry)=>{
      return <Entry 
      key={entry.id}
      // img={{src:entry.img.src, alt:entry.img.alt}}
      img={entry.img}
      title = {entry.title}
      dates ={entry.dates}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      text={entry.text}

      />
  })
  
  return (
    <>
    <Header></Header>
    {entryElement}
    </>
  );
}

export default App;
