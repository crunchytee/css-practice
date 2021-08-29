import './App.css';

function App() {
  return (
    <div id="row-wrapper" className="m-6 h-screen w-screen">
      <div id="row-1-wrapper" className="flex justify-around w-screen">
        <div id="rectangle-1" className="row-1-rectangle"/>
        <div id="rectangle-2" className="row-1-rectangle"/>
        <div id="rectangle-3" className="row-1-rectangle"/>
      </div>
      <div id="row-2-wrapper" className="flex justify-around w-screen mt-12">
        <div id="rectangle-4" className="w-700px h-100px bg-green-600 mr-64"/>
        <div id="circle-1" className="w-100px h-100px bg-green-600 rounded-full"/>
      </div>
      <div id="row-3-wrapper" className="flex justify-around w-screen mt-12">
        <div id="square-wrapper" className="w-850px">
          <div id="square-1" className="w-200px h-200px bg-green-600"/>
        </div>
        <div id="line-wrapper" className="flex justify-evenly flex-col">
          <div id="line-1" className="w-200px h-2px bg-green-600"/>
          <div id="line-2" className="w-200px h-2px bg-green-600"/>
          <div id="line-3" className="w-200px h-2px bg-green-600"/>
        </div>
      </div>
    </div>
  );
}

export default App;
