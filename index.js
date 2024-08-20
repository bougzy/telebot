// const TelegramBot = require('node-telegram-bot-api');

// // Replace with your Telegram Bot token
// const token = '7468707841:AAEGBZJ_tAzZ0nVal5Y5p-W29BAROK9XDpk';

// // Replace with your Admin Telegram ID
// const adminChatId = 'YOUR_ADMIN_CHAT_ID';

// const bot = new TelegramBot(token, { polling: true });

// // Log when the bot starts running
// console.log("Bot is running and polling for messages...");

// // When a message is received, log the chat ID
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   console.log(`Your Chat ID is: ${chatId}`);
// });

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

// // Sub-menu for Gift Cards
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

// // Sub-menu for Virtual Numbers (mocking 200 countries option)
// const virtualNumbersMenu = {
//   reply_markup: {
//     keyboard: [
//       ['Choose Country (200+ options)', '🔙 Back to Main Menu']
//     ],
//     resize_keyboard: true,
//     one_time_keyboard: true,
//   },
// };

// // Sub-menu for Social Media Boosting
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

// // Sub-menu for Cryptocurrency Buy/Sell
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
//   bot.sendMessage(msg.chat.id, 'Welcome! How can we assist you today?', mainMenu);
// });

// // Handle Main Menu Options
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   switch (text) {
//     case '🎁 Gift Cards':
//       bot.sendMessage(chatId, 'Choose an option:', giftCardMenu);
//       break;
//     case '📱 Virtual Numbers':
//       bot.sendMessage(chatId, 'Choose a country for virtual numbers:', virtualNumbersMenu);
//       break;
//     case '🚀 Boost Your Social Media':
//       bot.sendMessage(chatId, 'Choose a platform to boost:', socialMediaMenu);
//       break;
//     case '💱 Buy/Sell Cryptocurrency':
//       bot.sendMessage(chatId, 'Choose an option for Cryptocurrency:', cryptoMenu);
//       break;

//     // Gift Cards Options
//     case 'Buy Gift Cards':
//     case 'Sell Gift Cards':
//       bot.sendMessage(chatId, 'Connecting you with an admin for assistance...');
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Virtual Numbers Option
//     case 'Choose Country (200+ options)':
//       bot.sendMessage(chatId, 'Connecting you with an admin for virtual number services...');
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Social Media Options
//     case 'Facebook':
//     case 'Instagram':
//     case 'Twitter':
//     case 'TikTok':
//     case 'LinkedIn':
//     case 'YouTube':
//     case 'Website Traffic':
//       bot.sendMessage(chatId, `Connecting you with an admin for ${text} boosting...`);
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Cryptocurrency Options
//     case 'Buy BTC':
//     case 'Sell BTC':
//     case 'Buy XRP':
//     case 'Sell XRP':
//     case 'Buy ETH':
//     case 'Sell ETH':
//     case 'Buy USDT':
//     case 'Sell USDT':
//       bot.sendMessage(chatId, `Connecting you with an admin for ${text} transactions...`);
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Back to Main Menu
//     case '🔙 Back to Main Menu':
//       bot.sendMessage(chatId, 'Back to Main Menu:', mainMenu);
//       break;

//     default:
//       bot.sendMessage(chatId, 'Please choose an option from the menu.');
//   }
// });




// const TelegramBot = require('node-telegram-bot-api');

// // Replace with your Telegram Bot token
// const token = '7325518318:AAFT5ayZBY6MfhMjoGKZhe1-6_2yyBAzKAw';
// // Replace with your Admin Telegram ID
// const adminChatId = '@marviben_tec';

// const bot = new TelegramBot(token, { polling: true });

// // Log when the bot starts running
// console.log("Bot is running and polling for messages...");

// // When a message is received, log the chat ID
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   console.log(`Received a message from chat ID: ${chatId}`);
// });

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

// // Sub-menu for Gift Cards
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

// // Sub-menu for Virtual Numbers (mocking 200 countries option)
// const virtualNumbersMenu = {
//   reply_markup: {
//     keyboard: [
//       ['Choose Country (200+ options)', '🔙 Back to Main Menu']
//     ],
//     resize_keyboard: true,
//     one_time_keyboard: true,
//   },
// };

// // Sub-menu for Social Media Boosting
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

// // Sub-menu for Cryptocurrency Buy/Sell
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
//   console.log("Received /start command");  // Debug log
//   bot.sendMessage(msg.chat.id, 'Welcome! How can we assist you today?', mainMenu);
// });

// // Handle Main Menu Options
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   console.log(`User selected: ${text}`);  // Debug log

//   switch (text) {
//     case '🎁 Gift Cards':
//       bot.sendMessage(chatId, 'Choose an option:', giftCardMenu);
//       break;
//     case '📱 Virtual Numbers':
//       bot.sendMessage(chatId, 'Choose a country for virtual numbers:', virtualNumbersMenu);
//       break;
//     case '🚀 Boost Your Social Media':
//       bot.sendMessage(chatId, 'Choose a platform to boost:', socialMediaMenu);
//       break;
//     case '💱 Buy/Sell Cryptocurrency':
//       bot.sendMessage(chatId, 'Choose an option for Cryptocurrency:', cryptoMenu);
//       break;

//     // Gift Cards Options
//     case 'Buy Gift Cards':
//     case 'Sell Gift Cards':
//       bot.sendMessage(chatId, 'Connecting you with an admin for assistance...');
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Virtual Numbers Option
//     case 'Choose Country (200+ options)':
//       bot.sendMessage(chatId, 'Connecting you with an admin for virtual number services...');
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Social Media Options
//     case 'Facebook':
//     case 'Instagram':
//     case 'Twitter':
//     case 'TikTok':
//     case 'LinkedIn':
//     case 'YouTube':
//     case 'Website Traffic':
//       bot.sendMessage(chatId, `Connecting you with an admin for ${text} boosting...`);
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Cryptocurrency Options
//     case 'Buy BTC':
//     case 'Sell BTC':
//     case 'Buy XRP':
//     case 'Sell XRP':
//     case 'Buy ETH':
//     case 'Sell ETH':
//     case 'Buy USDT':
//     case 'Sell USDT':
//       bot.sendMessage(chatId, `Connecting you with an admin for ${text} transactions...`);
//       bot.forwardMessage(adminChatId, chatId, msg.message_id);
//       break;

//     // Back to Main Menu
//     case '🔙 Back to Main Menu':
//       bot.sendMessage(chatId, 'Back to Main Menu:', mainMenu);
//       break;

//     default:
//       bot.sendMessage(chatId, 'Please choose an option from the menu.');
//   }
// });




const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram Bot token
const token = '7325518318:AAFT5ayZBY6MfhMjoGKZhe1-6_2yyBAzKAw';

const bot = new TelegramBot(token, { polling: true });

// Log when the bot starts running
console.log("Bot is running and polling for messages...");

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

// Sub-menu for Gift Cards
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

// Sub-menu for Virtual Numbers (mocking 200 countries option)
const virtualNumbersMenu = {
  reply_markup: {
    keyboard: [
      ['Choose Country (200+ options)', '🔙 Back to Main Menu']
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

// Sub-menu for Social Media Boosting
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

// Sub-menu for Cryptocurrency Buy/Sell
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
  console.log("Received /start command");  // Debug log
  bot.sendMessage(msg.chat.id, 'Welcome! How can we assist you today?', mainMenu);
});

// Handle Main Menu Options
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  console.log(`User selected: ${text}`);  // Debug log

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

    // Gift Cards Options
    case 'Buy Gift Cards':
    case 'Sell Gift Cards':
      bot.sendMessage(chatId, 'Please describe your requirements, and we will assist you.');
      break;

    // Virtual Numbers Option
    case 'Choose Country (200+ options)':
      bot.sendMessage(chatId, 'Please specify the country for the virtual number, and we will assist you.');
      break;

    // Social Media Options
    case 'Facebook':
    case 'Instagram':
    case 'Twitter':
    case 'TikTok':
    case 'LinkedIn':
    case 'YouTube':
    case 'Website Traffic':
      bot.sendMessage(chatId, `Please describe your requirements for boosting ${text}, and we will assist you.`);
      break;

    // Cryptocurrency Options
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

    // Back to Main Menu
    case '🔙 Back to Main Menu':
      bot.sendMessage(chatId, 'Back to Main Menu:', mainMenu);
      break;

    default:
      bot.sendMessage(chatId, 'Please choose an option from the menu.');
  }
});

