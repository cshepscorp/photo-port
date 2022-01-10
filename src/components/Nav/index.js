import React from 'react';

function Nav() {
    const Categories = [
        {
            name: "commercial",
            description: "Photos of grocert stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies"},
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];
    function categorySelected(name) {
        console.log(`${name} clicked`)
      }
    return (
        <header>
            <h2>
                <a href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. This helps React keep track of items in the virtual DOM */}
                    {/* When you map over an array in a JSX expression, you should return only a single JSX element—like how you can only return a single element from a React component. */}
                    {Categories.map((category) => (
                    <li className="mx-1"
                        key={category.name} // we used category.name here bc we dont expect any categories to share the same name. id is often used as the key
                    >
                        {/* The onClick() attribute is expecting a callback function declaration. It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well. */}
                        <span onClick={() => categorySelected(category.name)} > 
                        {/* // categorySelected is a function name */}
                            {category.name}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;