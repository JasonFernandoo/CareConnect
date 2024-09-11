import React from 'react';
import BookConfirm from './BookConfirm';

function ParentComponent() {
    const handleBackButtonClick = () => {
        console.log('Back button clicked');
    };

    return (
        <div>
            <BookConfirm onBackButtonClick={handleBackButtonClick} />
        </div>
    );
}

export default ParentComponent;