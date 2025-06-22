import Header from "./src/Header"
import Footer from "./src/Footer"
import List from "./src/List"


// it is a parent component
//nesting can be done
function App(){
    return(
        <div>
        {/* you can also render here like this */}
            <Header />
            <List />
            <Footer />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("first"))
root.render(<App />)