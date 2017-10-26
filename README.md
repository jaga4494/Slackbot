# Slack bot leveraging Weather API

A simple slack bot that will tell us the current weather.

1. Create a new slack team. You may want to use this team for your fellow project teammates.

2. Create a bot team member. Click [/services/new/bot](https://my.slack.com/services/new/bot). For more information about bot-users, see [documentation](https://api.slack.com/bot-users).

3. Copy slack bot token.

4. Get [forecast.io token](https://darksky.net/dev). First 1000 api calls are free.

5. Update your environment variables.

   You do not want to store sensitive information like api tokens in public locations. Instead, you can store these in configuration files or environment variables.
   
   In windows, you can run:
   ```
   setx FORECASTTOKEN "<forecast.io.token>"
   setx SLACKTOKEN "<slack-token>"
   # You will then need to close the cmd window and reopen.
   ```
   In other systems, you can set them in your shell, like in `.bash_profile`:
   ```
   # Edit .bash_profile to have:
   export FORECASTTOKEN="<token>"
   export SLACKTOKEN="<slacktoken>"
   # Then reload
   $ source ~/.bash_profile
   ```

   Confirm you have properly set your tokens. Run `node envTest.js`. You should see your tokens properly printed out.

### Running the bot

Your goal is to be able to run your bot and get the current weather:

Run `node bot.js
* If it outputs something and waits, that's good.
* Check if you have a green light in your slack team for your bot. If not, make sure you properly registered bot. 
* See if you can get to have the bot reply to a message. Make sure bot is invited to that channel.

