import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
var Contact = function () {
    var _a = useState(''), name = _a[0], setName = _a[1];
    var _b = useState(''), email = _b[0], setEmail = _b[1];
    var _c = useState(''), message = _c[0], setMessage = _c[1];
    var _d = useState(false), isSubmitted = _d[0], setIsSubmitted = _d[1];
    var handleSubmit = function () {
        var templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'prabhat ', // Replace with recipient name .
            to_email: 'prabhatproffsion@email.com', // Replace with recipient email .
            message: message,
        };
        emailjs.send('service_0jb9pmj', 'template_2zy4feg', templateParams, 'GPXDK4N9uImN4eRtJ')
            .then(function (result) {
            console.log(result.text);
            setIsSubmitted(true);
            toast("Message Sent succesfully");
        })
            .catch(function (error) {
            console.error('Error sending email:', error);
        });
    };
    return (React.createElement("section", { id: "contact", className: "py-20 bg-gray-50" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Get In Touch"),
            React.createElement("div", { className: "max-w-lg mx-auto" },
                React.createElement("form", { className: "space-y-6" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "name", className: "block text-gray-700 mb-2" }, "Name"),
                        React.createElement("input", { type: "text", id: "name", value: name, onChange: function (e) { return setName(e.target.value); }, className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email", className: "block text-gray-700 mb-2" }, "Email"),
                        React.createElement("input", { type: "email", id: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "message", className: "block text-gray-700 mb-2" }, "Message"),
                        React.createElement("textarea", { id: "message", rows: 4, value: message, onChange: function (e) { return setMessage(e.target.value); }, className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })),
                    React.createElement("button", { type: "submit", onClick: handleSubmit, className: "w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors" }, "Send Message"),
                    React.createElement(Toaster, null))))));
};
export default Contact;
