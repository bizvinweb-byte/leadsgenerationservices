import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name = "",
      email = "",
      phone = "",
      businessName = "",
      industry = "",
      goal = "",
      message = "",
      source = "Hero Section",
      submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    } = body;

    // Google Sheets Webhook URL
    const googleSheetWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbz6kPgNw555NUGM33b2_rfP6pV5p8BO_CVy0cVTBThiCZPcHawhIx7r9Pv6MACju-lD/exec";

    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            type: "LEAD_GEN",
            site: "leadsgenerationservices.in",
            pageUrl: "https://leadsgenerationservices.in",
            name,
            email,
            phone,
            businessName,
            industry,
            goal,
            message,
            source,
            submittedAt,
          }),
        });
      } catch (sheetError) {
        console.error("Google Sheets Webhook forward error:", sheetError);
        // Continue without failing the user response
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
    });
  } catch (error) {
    console.error("API /api/lead error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
