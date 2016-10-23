# Notes on EVE

Eve is the backend for Jen.  All settings are stored in Eve.

Eve is built on NodeJs - Express - and Postgres

## Function
Eve's function is to store and serve settings.  Basically Eve is interfaced with by both Jen and Cecile

## Implementation
The initial plan was to have Eve sign into discord and get info about the user logging in.  However, that seems like it won't work as one would think.  Discord's api does not support the ability to access user data like that. We do have a workaround however (see below).

1. Create a new account with Cecile

2. Generate a token within Cecile and save it within Eve

3. Give that token to Jen.  Example: !token <token>

4. Jen will validate that the token is from the owner of the discord.

5. If valid Jen will interface with Eve

With that workaround it should allow the config to be served as normal.
