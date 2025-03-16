// Initialize the Telegram WebApp
const tgApp = window.Telegram.WebApp;

// Expand the Telegram Mini App to full height
tgApp.expand();

// Set the main button color and text
tgApp.MainButton.setParams({
    text: 'CONFIRM',
    color: '#2cab37',
});

// Get DOM elements
const mainButton = document.getElementById('mainButton');

// Add event listeners
mainButton.addEventListener('click', () => {
    // Show the Telegram main button
    tgApp.MainButton.show();
    
    // You can also send data back to the bot
    // tgApp.sendData(JSON.stringify({action: 'button_clicked'}));
    
    // Or show a popup
    tgApp.showPopup({
        title: 'Hello!',
        message: 'You clicked the button!',
        buttons: [{type: 'ok'}]
    });
});

// Handle the Telegram main button click
tgApp.MainButton.onClick(() => {
    tgApp.showAlert('Main button was clicked!');
    // Close the Mini App if needed
    // tgApp.close();
});

// Log when the Mini App is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Telegram Mini App initialized!');
    
    // You can also change the theme based on Telegram's theme
    if (tgApp.colorScheme === 'dark') {
        document.body.classList.add('dark');
    }
}); 