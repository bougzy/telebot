


// const TelegramBot = require('node-telegram-bot-api');

// // Replace with your Telegram Bot token
// const token = '7325518318:AAFT5ayZBY6MfhMjoGKZhe1-6_2yyBAzKAw'; // Replace with your actual bot token
// const adminId = 'YOUR_ADMIN_CHAT_ID'; // Replace with your actual admin Telegram user ID

// const bot = new TelegramBot(token, { polling: true });

// // Log when the bot starts running
// console.log("Bot is running and polling for messages...");

// // Log the Admin ID
// console.log(`Admin Telegram User ID is: ${adminId}`);

// let userMessages = {}; // Object to store user messages

// // Main Menu
// const mainMenu = {
//   reply_markup: {
//     keyboard: [
//       ['🎁 Gift Cards', '📱 Virtual Numbers'],
//       ['🚀 Boost Your Social Media', '💱 Buy/Sell Cryptocurrency'],
//     ],
//     resize_keyboard: true,
//     one_time_keyboard: true,
//   },
// };

// // Sub-menus for different options
// const giftCardMenu = {
//   reply_markup: {
//     keyboard: [
//       ['Buy Gift Cards', 'Sell Gift Cards'],
//       ['🔙 Back to Main Menu']
//     ],
//     resize_keyboard: true,
//     one_time_keyboard: true,
//   },
// };

// const virtualNumbersMenu = {
//   reply_markup: {
//     keyboard: [
//       ['Choose Country (200+ options)', '🔙 Back to Main Menu']
//     ],
//     resize_keyboard: true,
//     one_time_keyboard: true,
//   },
// };

// const socialMediaMenu = {
//   reply_markup: {
//     keyboard: [
//       ['Facebook', 'Instagram', 'Twitter'],
//       ['TikTok', 'LinkedIn', 'YouTube'],
//       ['Website Traffic', '🔙 Back to Main Menu']
//     ],
//     resize_keyboard: true,
//     one_time_keyboard: true,
//   },
// };

// const cryptoMenu = {
//   reply_markup: {
//     keyboard: [
//       ['Buy BTC', 'Sell BTC'],
//       ['Buy XRP', 'Sell XRP'],
//       ['Buy ETH', 'Sell ETH'],
//       ['Buy USDT', 'Sell USDT'],
//       ['🔙 Back to Main Menu']
//     ],
//     resize_keyboard: true,
//     one_time_keyboard: true,
//   },
// };

// // Start Command
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Welcome! How can we assist you today?', mainMenu);
// });

// // Admin Command to Send Messages to Users
// bot.onText(/\/admin (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const response = match[1]; // The message text after /admin command

//   if (chatId == adminId) {
//     const [targetUserId, ...messageParts] = response.split(' ');
//     const message = messageParts.join(' ');

//     bot.sendMessage(targetUserId, `Admin: ${message}`)
//       .then(() => bot.sendMessage(adminId, `Message sent to user ${targetUserId}: ${message}`))
//       .catch((err) => bot.sendMessage(adminId, `Failed to send message to user ${targetUserId}: ${err.message}`));
//   } else {
//     bot.sendMessage(chatId, 'You are not authorized to use this command.');
//   }
// });

// // Admin Command to View User Messages
// bot.onText(/\/view_users/, (msg) => {
//   const chatId = msg.chat.id;

//   if (chatId == adminId) {
//     let userMessageList = 'User Messages:\n\n';
//     for (let userId in userMessages) {
//       userMessageList += `User ${userId}:\n`;
//       userMessages[userId].forEach((message, index) => {
//         userMessageList += `${index + 1}: ${message.text}\n`;
//       });
//       userMessageList += '\n';
//     }
//     bot.sendMessage(adminId, userMessageList || 'No messages from users yet.');
//   } else {
//     bot.sendMessage(chatId, 'You are not authorized to use this command.');
//   }
// });

// // Admin Command to Reply to Users
// bot.onText(/\/reply (\d+) (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;

//   if (chatId == adminId) {
//     const targetUserId = match[1];
//     const message = match[2];

//     bot.sendMessage(targetUserId, `Admin: ${message}`)
//       .then(() => bot.sendMessage(adminId, `Message sent to user ${targetUserId}: ${message}`))
//       .catch((err) => bot.sendMessage(adminId, `Failed to send message to user ${targetUserId}: ${err.message}`));
//   } else {
//     bot.sendMessage(chatId, 'You are not authorized to use this command.');
//   }
// });

// // Handle Main Menu and User Messages
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   if (chatId !== adminId && text !== '/start') {
//     // Store user's message with metadata
//     if (!userMessages[chatId]) {
//       userMessages[chatId] = [];
//     }
//     userMessages[chatId].push({ text, messageId: msg.message_id });

//     // Notify admin about the user's new message
//     bot.sendMessage(adminId, `New message from user ${chatId}: ${text}`);

//     switch (text) {
//       case '🎁 Gift Cards':
//         bot.sendMessage(chatId, 'Choose an option:', giftCardMenu);
//         break;
//       case '📱 Virtual Numbers':
//         bot.sendMessage(chatId, 'Choose a country for virtual numbers:', virtualNumbersMenu);
//         break;
//       case '🚀 Boost Your Social Media':
//         bot.sendMessage(chatId, 'Choose a platform to boost:', socialMediaMenu);
//         break;
//       case '💱 Buy/Sell Cryptocurrency':
//         bot.sendMessage(chatId, 'Choose an option for Cryptocurrency:', cryptoMenu);
//         break;

//       // Handling responses for sub-menu options
//       case 'Buy Gift Cards':
//       case 'Sell Gift Cards':
//         bot.sendMessage(chatId, 'Please describe your requirements, and we will assist you.');
//         break;
//       case 'Choose Country (200+ options)':
//         bot.sendMessage(chatId, 'Please specify the country for the virtual number, and we will assist you.');
//         break;
//       case 'Facebook':
//       case 'Instagram':
//       case 'Twitter':
//       case 'TikTok':
//       case 'LinkedIn':
//       case 'YouTube':
//       case 'Website Traffic':
//         bot.sendMessage(chatId, `Please describe your requirements for boosting ${text}, and we will assist you.`);
//         break;
//       case 'Buy BTC':
//       case 'Sell BTC':
//       case 'Buy XRP':
//       case 'Sell XRP':
//       case 'Buy ETH':
//       case 'Sell ETH':
//       case 'Buy USDT':
//       case 'Sell USDT':
//         bot.sendMessage(chatId, `Please describe your requirements for ${text} transactions, and we will assist you.`);
//         break;
//       case '🔙 Back to Main Menu':
//         bot.sendMessage(chatId, 'Back to Main Menu:', mainMenu);
//         break;

//       default:
//         bot.sendMessage(chatId, 'Please choose an option from the menu.');
//     }
//   }
// });

const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram Bot token and admin ID
const token = '7325518318:AAFT5ayZBY6MfhMjoGKZhe1-6_2yyBAzKAw'; 
const adminId = '6554903716';

const app = express();
const bot = new TelegramBot(token, { polling: true });

let userMessages = {}; // Object to store user messages

// Log when the bot starts running
console.log("Bot is running and polling for messages...");

// Log the Admin ID
console.log(`Admin Telegram User ID is: ${adminId}`);

// Main Menu
const mainMenu = {
  reply_markup: {
    keyboard: [
      ['🎁 Gift Cards', '📱 Virtual Numbers'],
      ['🚀 Boost Your Social Media', '💱 Buy/Sell Cryptocurrency'],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

// Sub-menus for different options
const giftCardMenu = {
  reply_markup: {
    keyboard: [
      ['Buy Gift Cards', 'Sell Gift Cards'],
      ['🔙 Back to Main Menu']
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

const virtualNumbersMenu = {
  reply_markup: {
    keyboard: [
      ['Choose Country (200+ options)', '🔙 Back to Main Menu']
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

const socialMediaMenu = {
  reply_markup: {
    keyboard: [
      ['Facebook', 'Instagram', 'Twitter'],
      ['TikTok', 'LinkedIn', 'YouTube'],
      ['Website Traffic', '🔙 Back to Main Menu']
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

const cryptoMenu = {
  reply_markup: {
    keyboard: [
      ['Buy BTC', 'Sell BTC'],
      ['Buy XRP', 'Sell XRP'],
      ['Buy ETH', 'Sell ETH'],
      ['Buy USDT', 'Sell USDT'],
      ['🔙 Back to Main Menu']
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

// Start Command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! How can we assist you today?', mainMenu);
});

// Admin Command to Send Messages to Users
bot.onText(/\/admin (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const response = match[1]; // The message text after /admin command

  if (chatId == adminId) {
    const [targetUserId, ...messageParts] = response.split(' ');
    const message = messageParts.join(' ');

    bot.sendMessage(targetUserId, `Admin: ${message}`)
      .then(() => bot.sendMessage(adminId, `Message sent to user ${targetUserId}: ${message}`))
      .catch((err) => bot.sendMessage(adminId, `Failed to send message to user ${targetUserId}: ${err.message}`));
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});

// Admin Command to View User Messages
bot.onText(/\/view_users/, (msg) => {
  const chatId = msg.chat.id;

  if (chatId == adminId) {
    let userMessageList = 'User Messages:\n\n';
    for (let userId in userMessages) {
      userMessageList += `User ${userId}:\n`;
      userMessages[userId].forEach((message, index) => {
        userMessageList += `${index + 1}: ${message.text}\n`;
      });
      userMessageList += '\n';
    }
    bot.sendMessage(adminId, userMessageList || 'No messages from users yet.');
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});

// Admin Command to Reply to Users
bot.onText(/\/reply (\d+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;

  if (chatId == adminId) {
    const targetUserId = match[1];
    const message = match[2];

    bot.sendMessage(targetUserId, `Admin: ${message}`)
      .then(() => bot.sendMessage(adminId, `Message sent to user ${targetUserId}: ${message}`))
      .catch((err) => bot.sendMessage(adminId, `Failed to send message to user ${targetUserId}: ${err.message}`));
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});

// Handle Main Menu and User Messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (chatId !== adminId && text !== '/start') {
    // Store user's message with metadata
    if (!userMessages[chatId]) {
      userMessages[chatId] = [];
    }
    userMessages[chatId].push({ text, messageId: msg.message_id });

    // Notify admin about the user's new message
    bot.sendMessage(adminId, `New message from user ${chatId}: ${text}`);

    switch (text) {
      case '🎁 Gift Cards':
        bot.sendMessage(chatId, 'Choose an option:', giftCardMenu);
        break;
      case '📱 Virtual Numbers':
        bot.sendMessage(chatId, 'Choose a country for virtual numbers:', virtualNumbersMenu);
        break;
      case '🚀 Boost Your Social Media':
        bot.sendMessage(chatId, 'Choose a platform to boost:', socialMediaMenu);
        break;
      case '💱 Buy/Sell Cryptocurrency':
        bot.sendMessage(chatId, 'Choose an option for Cryptocurrency:', cryptoMenu);
        break;

      // Handling responses for sub-menu options
      case 'Buy Gift Cards':
      case 'Sell Gift Cards':
        bot.sendMessage(chatId, 'Please describe your requirements, and we will assist you.');
        break;
      case 'Choose Country (200+ options)':
        bot.sendMessage(chatId, 'Please specify the country for the virtual number, and we will assist you.');
        break;
      case 'Facebook':
      case 'Instagram':
      case 'Twitter':
      case 'TikTok':
      case 'LinkedIn':
      case 'YouTube':
      case 'Website Traffic':
        bot.sendMessage(chatId, `Please describe your requirements for boosting ${text}, and we will assist you.`);
        break;
      case 'Buy BTC':
      case 'Sell BTC':
      case 'Buy XRP':
      case 'Sell XRP':
      case 'Buy ETH':
      case 'Sell ETH':
      case 'Buy USDT':
      case 'Sell USDT':
        bot.sendMessage(chatId, `Please describe your requirements for ${text} transactions, and we will assist you.`);
        break;
      case '🔙 Back to Main Menu':
        bot.sendMessage(chatId, 'Back to Main Menu:', mainMenu);
        break;

      default:
        bot.sendMessage(chatId, 'Please choose an option from the menu.');
    }
  }
});

// Set up a basic Express server
app.get('/', (req, res) => {
  res.send('Telegram Bot is running!');
});

// Bind Express app to a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
