import { bot } from "@/bot"

export async function POST(req) {
    try {
        if (process.env.NODE_ENV == "production")
            await bot.handleUpdate(await req.json());
        return NextResponse.json({ "done": true });
    } catch (err) {
        return NextResponse.json({ error: "Invalid" })
    }
}

export async function GET(req) {
    try {
        if (process.env.NODE_ENV == "development") {
            await bot.launch({ dropPendingUpdates: true })
        } else {
            let url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/setWebhook?url=${process.env.VERCEL_URL}/api`
            let res = await fetch(url)
                .then(res => res.json())
            return NextResponse.json(res);
        }
    } catch (err) {
        return NextResponse.json({ error: err.message })
    }
}


