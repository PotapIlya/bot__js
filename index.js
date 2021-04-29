const config = require('./config');const TelegramBot = require('node-telegram-bot-api');const bot = new TelegramBot(config.basic.token, {    polling: true});bot.onText(/\/start/, (msg) =>{    bot.sendMessage(msg.chat.id, `Hello ${msg.chat.first_name}`, {        "reply_markup" : {            "keyboard" : config.keyboard        }    });});bot.on('message', (query) =>{    switch (query.text)    {        case 'Btn_1':            bot.sendMessage(query.chat.id, '1', {                "reply_markup" : {                    "keyboard" : config.keyboard_1                }            });            break;        case 'Btn_2':            bot.sendMessage(query.chat.id, '2', {                "reply_markup" : {                    "keyboard" : config.keyboard_2                }            });            break;        case 'Btn_3':            bot.sendMessage(query.chat.id, '3', {                "reply_markup" : {                    "keyboard" : config.keyboard_3                }            });            break;        default:            bot.sendMessage(query.chat.id, 'Error button name' );            break;    }});// bot.on('callback_query', (query) => {////     console.log(query)////     const chatId = query.message.chat.id;////     let img = '';////     if (query.data === 'moreKeks') { // если кот//         img = 'keks.png';//     }////     if (query.data === 'morePes') { // если пёс//         img = 'pes.png';//     }////     if (img) {//         bot.sendPhoto(chatId, img, { // прикрутим клаву//             reply_markup: {//                 inline_keyboard: config.keyboard//             }//         });//     } else {//         bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {//             // прикрутим клаву//             reply_markup: {//                 inline_keyboard: config.keyboard//             }//         });//     }// });console.log('START...');