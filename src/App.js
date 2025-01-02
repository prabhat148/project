import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Qualification from './components/Qualification';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
    return (React.createElement("div", { className: "min-h-screen bg-white dark:bg-gray-900 transition-colors" },
        React.createElement(Header, null),
        React.createElement("main", null,
            React.createElement(Hero, null),
            React.createElement(Qualification, null),
            React.createElement(Experience, null),
            React.createElement(Projects, null),
            React.createElement(Contact, null)),
        React.createElement("footer", { className: "bg-gray-800 dark:bg-gray-950 text-white py-6 text-center" },
            React.createElement("p", null,
                "\u00A9 ",
                new Date().getFullYear(),
                " Your Name. All rights reserved."))));
}
export default App;
