<h1>Freeuse OpenAI Project</h1>
<br />
<p>The rise of AI is exciting and useful. In fact, so much so, that many people want to use it for their own entertainment and education, including myself. There's a downside to that though. Servers are usually overloaded which means I can't create AI images and talk to an AI chatbot during busy times which seems to be always.</p>
<p>I created this simple project to utilize the GPT and DALL-E APIs so I can utilize AI freely.</p>
<br />
<p>Application is built using React.js and Axios</p>
<h2>Chat Generator</h2>
<p>Chat bot has been updated to use the GPT-3.5-Turbo model.</p>
<p>useState used to hold chat log data that is sent on every request so that a conversation can be held with the AI. Very good for asking follow up questions. Requests are sent via axios with Authorizations held in a separate .env file.</p>
<br />
<h2>Image Generator</h2>
<p>Image generator that uses the DALLE 2 model</p>
<p>Requests and Image Responses from the API endpoint are saved via state. Images are rendered in 1024x1024. Requests are made via Axios with authorizations held in a .env file.</p>
