import React from "react";

function About(){
    return (
        <div className="container text-white fs-4 mt-4">
            <h1 className="text-black text-center">About TextUtil React App</h1>
        <p> Welcome to TextUtil, your all-in-one text manipulation and website customization tool. TextUtil is a powerful single-page React application that empowers you to effortlessly modify text, change the website's color scheme, and perform various text-related operations with just a few clicks. Let's explore the key features of TextUtil:</p>
        
        <h2 className="text-black text-center">Text Transformation</h2>
        <h3 className="text-black ">Convert Case</h3>
        <p> Easily switch between uppercase and lowercase text with a single click. Whether you need to shout your message or keep it low-key, TextUtil has you covered.</p>
        
        <h3 className="text-black ">Clear Text</h3>
        <p> Quickly clear the text area, providing you with a clean slate for your next input.</p>
        
        <h3 className="text-black ">Copy Text</h3>
        <p> Copy the modified text to your clipboard with a simple button press, making it convenient for pasting into other applications or documents.</p>
        
        <h3 className="text-black ">Remove Extra Spaces</h3>
        <p> Say goodbye to unwanted extra spaces with TextUtil's efficient space removal feature. Keep your text neat and tidy.</p>
        
        <h3 className="text-black ">Extract Text</h3>
        <p> Extract specific parts of your text, whether it's a block of text, numbers, or email addresses. This feature streamlines information retrieval.</p>
        
        <h3 className="text-black ">Extract Numbers</h3>
        <p> Isolating numerical data from a text block is a breeze with TextUtil. This tool is perfect for data extraction tasks.</p>
        
        <h3 className="text-black ">Extract Email IDs</h3>
        <p> Easily locate and extract email addresses from your text. Simplify email collection and management tasks.</p>
        
        <h2 className="text-black text-center">Website Customization:</h2>
        <h3 className="text-black ">Change Website Color</h3> 
        <p> Tailor your website's appearance to your liking. Toggle between various color schemes using the color switch options provided by TextUtil. Personalize your browsing experience effortlessly.</p>
        
        <h2 className="text-black text-center">Single-Page Application</h2>
        <p> TextUtil employs a router to function as a single-page application, ensuring a seamless and responsive user experience. With the power of React, the entire application loads once, and navigation between features is swift and smooth.
        
        TextUtil is designed to be your go-to tool for text manipulation and website customization. Whether you're a writer, a data analyst, a web designer, or simply someone looking to modify text and customize website colors, TextUtil has something for everyone.
        
        Don't hesitate to explore and make the most of TextUtil's features. We hope this application simplifies your text-related tasks and website customization, making your online experience even more enjoyable and efficient.
        
        Thank you for choosing TextUtil as your text and website utility. If you have any feedback or suggestions, please feel free to share them with us. Your input is valuable as we continue to improve and enhance this application.
        
        Happy TextUtil-ing!</p>
        </div>
    )
}

export default About;