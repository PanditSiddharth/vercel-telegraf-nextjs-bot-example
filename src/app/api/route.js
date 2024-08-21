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
    try {
        let url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/setWebhook?url=${process.env.VERCEL_URL}/api`
        let res = await fetch(url)
            .then(res => res.json())
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}