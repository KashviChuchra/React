
// this is a declarative way to write code
// means tells js what to do, not how to do

// const root=ReactDOM.createRoot(document.getElementById("first"))
// root.render(<h1 className="header">Hello</h1>)

// root.render(<ul><li>apple</li> <li>banana</li></ul>)


const root=ReactDOM.createRoot(document.getElementById("first"))


function MyNavBar(){
    return(
        <h1>This is a nav bar</h1>
    )
}
function MainContent(){
    return(
        <h1>This includes main content</h1>
    )
}
root.render(
    <div>
        <MyNavBar />
        <MainContent />
    </div>

)


// the below is imperative, tells how to do

const h1=document.createElement("h1");
h1.textContent="Thi is an imperative way";
h1.className="nav";

const parent=document.getElementById("first");
parent.appendChild(h1);

console.log(h1) // on terminal,     output=> <h1 className="nav">


// JSX -> JAVASCRIPT XML

const element=<h1 className="header">This is a JSX code</h1>
const name=ReactDOM.createRoot(document.getElementById("first"))
name.render(element)

console.log(element) 
// it will give  js object

// {
//   type: 'h1',
//   key: null,
//   ref: null,
//   props: {
//     className: 'header',
//     children: 'This is a JSX code'
//   },
// }


// only 1 parent element inside render is allowed
// this will give error
//name.render(<h1 className="header">This is a JSX code</h1> <p>This is a paragraph</p>)


const page=(
    <div>
        <h1>Hello,React</h1>
        <p> This is a paragraph </p>
    </div>
)

name.render(page)

const example=(
    <nav>
        <h1 className="website">Musico</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
name.render(example)


// why use reactDOM.render instead of .append function in js

const sample=(
<div>
    <h1>element1</h1>
    <h1>element2</h1>
    <div><h1>element3</h1></div>
    <h1>element4</h1>
</div>
)

const parent1=document.getElementById("first")
parent1.append(sample)

// we get output as - [object Object]

parent1.append(JSON.stringify(sample))
// we will get output as -> {type: 'div', props: { ... }}


//explanation

//here sample is not a html element, its a react element -> (jsx returns plain js object)
// .append(sample)  means -> append js object to DOM
// the browser doesn’t know how to show that object, so it displays:   [object Object]


// .append(recipe) = gives you a paper with instructions.
//ReactDOM.render(recipe) = actually cooks and serves the food 🍽️