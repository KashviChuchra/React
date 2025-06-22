function header(){
    return(
        <div className="partOne" style={
            {
                width:"40px",
                align:"left"
            }
        }>
            <img src=""></img>
            <h1>Fun facts about React</h1>
        </div>
    )
}
function middle(){
    return(
        <div>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>

             
            </ul>
        </div>
    )
}

const root=React.createRoot(document.getElementById("first"))
root.renderDOM(
    <div>
        <header />
        <middle />
    </div>
)