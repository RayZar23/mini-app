# Telegram Mini App Template

This is a simple template for creating a Telegram Mini App. It provides a basic structure and demonstrates how to use the Telegram Web App SDK.

## Features

- Integration with Telegram Web App SDK
- Responsive design that works on all devices
- Support for both light and dark themes
- Examples of using Telegram UI components (MainButton, Popup, etc.)

## How to Use

### 1. Host the Mini App

You need to host these files on a web server. You can use:
- GitHub Pages
- Vercel
- Netlify
- Any other static hosting service

### 2. Create a Bot and Set Up the Mini App

1. Talk to [@BotFather](https://t.me/BotFather) on Telegram
2. Create a new bot with `/newbot` command
3. After creating the bot, use the `/mybots` command
4. Select your bot → Bot Settings → Menu Button
5. Choose "Web App" and enter the URL where you hosted these files

### 3. Testing Your Mini App

- Open your bot in Telegram
- Click on the Menu button to launch your Mini App

## Customization

- Edit `index.html` to change the structure
- Modify `styles.css` to customize the appearance
- Update `app.js` to add more functionality

## Telegram Web App SDK Features Used

- `tgApp.expand()` - Expands the Mini App to full height
- `tgApp.MainButton` - Configures and shows the main button
- `tgApp.showPopup()` - Displays a popup dialog
- `tgApp.showAlert()` - Shows an alert message
- Theme adaptation using CSS variables

## Additional Resources

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [Telegram Bot API](https://core.telegram.org/bots/api)

## License

This template is available under the MIT License. 