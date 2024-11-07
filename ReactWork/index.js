// const div=document.getElementById("parent")
// const h2=document.createElement("h2");
// h2.innerText="Hello Cs"
// div.appendChild(h2)
// console.log(h2)

const parent=document.getElementById("root");
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h2= React.createElement("h2",{style:{color:'red'}},"Hello React JS");
// const li1 = React.createElement('li',{},"orange")
// const li2 = React.createElement('li',{},"apple")
// const ul = React.createElement('ul',{},li1,li2);
// const div = React.createElement("div",{},h2,ul)

// JSX
const h2= React.createElement("h2",{},"Heading Tag");
const h21=<h2>Hello JSX in JS</h2>


root.render(h21);
// const p1=<p>sakshiii</p>
// root.render(p1)
const l1=<li>orange</li>
const l2=<li>red</li>
const l3=<li>black</li>
const l4=<li>white</li>
const ul=<ul style={{color:'red'}}>{l1}{l2}{l3}{l4}</ul>

const container=(
<div>
    <div>WELCOME TO REACT APPLICATION DEVELOPMENT </div>
    <div>{ul}</div>
    <div>{h21}</div>
    </div>
);

root.render(container)
