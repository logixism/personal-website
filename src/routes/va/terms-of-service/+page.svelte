<script lang="ts">
	import { marked } from 'marked';
	const source = `# Terms of Service

By using "Value Assistant", further "the bot" or "our bot", you agree to abide by the following terms:

* Data Storage: Our bot stores user IDs and guild IDs solely for the purpose of maintaining functionality. User IDs are stored to blacklist bad actors if necessary, while guild IDs are stored to associate configuration files with individual guilds.

* Acceptable Use: You agree not to misuse the bot or its functionalities in any way that violates Discord's Terms of Service or any applicable laws.

* Limitation of Liability: While we strive for reliable service, we do not guarantee 100% uptime and are not liable for any interruptions or damages resulting from the use or inability to use our bot.

* Changes to Service: We reserve the right to modify or discontinue the bot or any features at any time without prior notice.

* User Conduct: Users are responsible for their conduct and content while using the bot. Users are not to misuse the bot. 

* Privacy: We respect your privacy and handle your data in accordance with our Privacy Policy.

By using our bot, you acknowledge that you have read, understood, and agree to be bound by these terms.

`;
</script>

<div class="markdown manjari-regular" style="background-color: #f0f0f0; border-radius: 8px;">
	{@html marked(source)}
</div>

<style>
	.markdown {
		padding: 4rem;
	}
</style>
