import './App.css';

function App() {
  return (
    <div id="wrapper" className="m-6 h-screen w-screen">
      {/* <div id="rectangle-1" className="w-3/12 h-1/2 fill-current text-green-600"></div> */}
      <div id="row-1-wrapper" className="flex justify-end w-screen">
        <div id="rectangle-1" className="row-1-rectangle"/>
        <div id="rectangle-2" className="row-1-rectangle"/>
        <div id="rectangle-3" className="row-1-rectangle"/>
      </div>
      <div id="row-2-wrapper">
        <div id="rectangle-4" />
        <div id="circle-1" />
      </div>
      <div id="row-3-wrapper">
        <div id="square-1" />
        <div id="line-wrapper">
          <div id="line-1" />
          <div id="line-2" />
          <div id="line-3" />
        </div>
      </div>
    </div>
  );
}

export default App;
