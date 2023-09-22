import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
todo Header
*       - Logo
*       - List
*       - Cart
todo body
*       - Banner Image
            - Heading 
            - Decription
*       - About US Overview
            - Description
            - Readme button
*       - Our Product
            - product cards
                - Image 
                - Name 
*       - Testimonials
            - Image
            - Name
            - Country
            - Message
            - Ratings
*       - Blogs Overview
            - Blog Cards
                - Images
                - Title
                - Description
                - Readme button
*       - Contact Form
todo footer 
*   - Links 
*/


    // ---------------------------------------------------------------- Header
    const Title = () =>(
         <a href='/'>
            <img className='logo' src="https://i.pinimg.com/originals/f2/9f/d9/f29fd9265cad42047ecc32ae11826d4a.png" alt='Logo'/>
         </a>
    )

    const Header = () =>( 
        <>
        <div className='listContainer'>
        <Title/>
            <ul>
                <li>About</li>
                <li>Shop</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
        </div>

        </>
    )


    // ---------------------------------------------------------------- Body
    const Body = () =>( 
        <>
        <h1>

        Body
        </h1>
        </>
    )
    // ---------------------------------------------------------------- Footer
    const Footer = () =>( 
        <>
        <h1>

        Footer
        </h1>
        </>
    )

    const AppComponent = () =>(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )


const root = ReactDOM.createRoot(document.querySelector('#root')); 

root.render(<AppComponent/>); 