<script lang="ts">
	import { marked } from 'marked';
	const source = `# Privacy Policy

Value Assistant, further "our bot", respects your privacy and is committed to protecting your personal information. Here's how we handle your data:

* Data Collection: We only collect user IDs and guild IDs for essential functionality purposes. User IDs are stored to blacklist bad actors if necessary, and guild IDs are stored to associate configuration files with individual guilds.

* Data Usage: The collected data is solely used for maintaining and improving the functionality of our bot. We do not sell, share, or disclose this information to third parties except as required by law.

* Retention: We retain user and guild IDs only for as long as necessary to fulfill the purposes outlined in this policy and as required by law.

* Updates to Policy: We reserve the right to update our Privacy Policy as needed. Any changes will be reflected on this page.

By using our bot, you consent to the collection and use of your data as outlined in this Privacy Policy.
If you have any questions or concerns about our Terms of Service or Privacy Policy, please contact us by Direct Message in Discord to: \`logix.lol\`, user id: \`804066391614423061\`.`;
</script>

<div class="markdown manjari-regular" style="background-color: #f0f0f0; border-radius: 8px;">
	{@html marked(source)}
</div>

<style>
	.markdown {
		padding: 4rem;
	}
</style>
