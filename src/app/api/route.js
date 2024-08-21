import { bot } from "@/bot"
export async function POST(request) {
    try {
      const update = await request.json();
      await bot.handleUpdate(update);
    } catch (err) {
      console.error('Error handling update', err);
    }
    return NextResponse.json({ status: 'ok' });
  }

  export async function GET() {
    const webhookUrl = `https://${process.env.VERCEL_URL}/api`;
    await bot.telegram.setWebhook(webhookUrl);
    console.log(`Webhook set to: ${webhookUrl}`);
    return NextResponse.json({ status: 'webhook set' });
  }