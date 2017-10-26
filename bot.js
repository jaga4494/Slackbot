
var Botkit = require('botkit');
var Forecast = require('forecast.io');
var options = {APIKey:process.env.FORECASTTOKEN};
var forecast = new Forecast(options);
var weatherTest = require("./weatherTest.js");

//var childProcess = require("child_process");

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACKTOKEN,
}).startRTM()

// give the bot something to listen for.
//controller.hears('string or regex',['direct_message','direct_mention','mention'],function(bot,message) {

  var button={
    "text": "You can view, comment on, or merge this pull request online",
  
    "attachments": [
        {
            "text": "Select an action!!",
            
            "color": "#3AA3E3",
      
            "attachment_type": "default",
            "actions": [
                {
                    "name": "pull",
                    "text": "Merge",
                    "type": "button",
                    "style": "primary",
                    "data_source": "google.com",
                    "value": "Merge"
                },
                {
                    "name": "pull",
                    "text": "Close",
                    "style": "danger",
                    "type": "button",
                    "value": "Close",
                    "confirm": {
                        "title": "Are you sure to close this pull request?",
                        
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
  };

controller.hears('weather',['mention', 'direct_mention','direct_message'], function(bot,message) 
{
  console.log(message);
 // bot.reply(message,"The weather is great");
//  bot.reply(message,'You can view, comment on, or merge this <https://github.ncsu.edu/magrawa4/test2/pull/4|pull\brequest>');
bot.reply(message,button);
  var text1= {
    "text": "This is a line of text.\nAnd this is another one."
};
  //bot.reply(message,text1);
  



 // bot.reply(HTMLInputElement,google.com);
  //bot.reply(HTMLLinkElement,www.facebook.com);
  //bot.reply(HTMLButtonElement, http//www.foo.com|www.foo.com);
  //weatherTest.getWeather();
  /*weatherTest.getWeather(callback)
  {
    onWeather(function(w)
    {
      callback(w);
    });
  }*/

});
