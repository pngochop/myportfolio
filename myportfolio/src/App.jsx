import React from 'react'
import {Header} from './components/header/Header'
import {Nav} from './components/nav/Nav'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'
import DataControl from './components/dataControl/DataControl'
import './index.css'
import {useState} from 'react'

//const URL = "https://hopp-lab4-backend.herokuapp.com/params?name=hop pham";
// const URL = "https://hopp-lab4-backend.herokuapp.com/contacts?memberid=72";

// const requestOptions = {
//             method: 'GET',
//             headers: { 
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpbmRvZmNoYXJpdGFibGVAZ21haWwuY29tIiwiaWF0IjoxNTcyMjAyODUyLCJleHAiOjE1NzIyODkyNTJ9.OIWsMnAcIotvJ3XJ3eFoFCet4Yu-JA5OwYBx2wMblvs'
//         },
    
//             body: JSON.stringify({ title: 'React POST Request Example' })
//         };
/*
useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberid: 72 })
    };
    fetch(URL, requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
*/

// const fetchPromise = fetch(URL)
// .then(response => response.json())
// .then(data => console.log(data));

// console.log(fetchPromise);

// fetchPromise.then( response => {
//   console.log(response.JSON);
// });

console.log("Started request...");

const App = () => {
    const [activeNav,setActiveNav] = useState('#')
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Contact />
            <Footer />
            <DataControl />
        </>
    )
}

export default App
