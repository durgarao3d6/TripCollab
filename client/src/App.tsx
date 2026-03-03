import './App.css'

function App() {

  return (
    <>
      <div className="bg-transport p-3 text-white">Transport</div>
      <div className="bg-hotel p-3 text-white">Hotel</div>
      <div className="bg-food p-3 text-white">Food</div>
      <div className="border-l-4 border-adventure text-adventure">
        Adventure Activity
      </div>
      <p className="text-shopping">
        Shopping category text
      </p>
      <div className="bg-bg-secondary dark:bg-bg-primary text-text-primary p-6 rounded-lg shadow">
        Content
      </div>
      <h1 className="font-display text-5xl">
        Hero Title
      </h1>
      <p className="font-body text-lg">
        Body paragraph.
      </p>
      <code className="font-mono text-sm">
        npm install
      </code>
    </>
  )
}

export default App
