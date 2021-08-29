import './App.css';

function App() {
  return (
    <div id="row-wrapper" className="m-6 h-screen w-screen">
      <div id="row-1-wrapper" className="flex justify-around w-screen m-6">
        <div id="rectangle-1" className="row-1-rectangle"/>
        <div id="rectangle-2" className="row-1-rectangle"/>
        <div id="rectangle-3" className="row-1-rectangle"/>
      </div>
      <div id="row-2-wrapper" className="flex justify-around w-screen mt-28">
        <div id="rectangle-4" className="w-700px h-100px bg-green-600 mr-64"/>
        <div id="circle-1" className="w-100px h-100px bg-green-600 rounded-full"/>
      </div>
      <div id="row-3-wrapper" className="flex justify-around w-screen">
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
