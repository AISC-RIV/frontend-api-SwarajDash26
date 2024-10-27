import React, { useState, useEffect } from 'react';
import donkeyImage from './assets/donkey.jpg'; // Updated to .jpg

function Welcome() {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/images/search', {
            headers: {
                'x-api-key': process.env.REACT_APP_DOG_API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                setDogImage(data[0].url);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to the UCR Donkey and a Personal Dog Appreciation Page!</h1>
            <p>This is a placeholder for donkey images and a fun dog image!</p>

            {/* Display the local donkey image */}
            <img src={donkeyImage} alt="A donkey" width="600" height="400" />

            {/* Display the fetched dog image */}
            {dogImage && (
                <img src={dogImage} alt="A dog (as a fun addition)" width="600" height="400" />
            )}
        </div>
    );
}

export default Welcome;