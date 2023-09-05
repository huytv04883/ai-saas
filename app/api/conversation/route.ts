import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-qQqlfWRFiVzfvG9GrTLzSmpW",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(res: Request) {
    try {
        const { userId } = auth();
        const body = await res.json();
        const { messages } = body;
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("Open ai key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages is required", { status: 400 });
        }

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages
        })

        return NextResponse.json(response.data.choices[0].message);

    } catch (error) {
        console.log("[CONVERSATION_ERROR]:", error);

        return new NextResponse('Internal error', { status: 500 })

    }
}