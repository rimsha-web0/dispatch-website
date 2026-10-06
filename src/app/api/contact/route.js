import { Resend } from "resend";
import { site } from "@/config/site";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Contact form is not configured yet." },
        { status: 503 }
      );
    }

    const data = await request.json();

    // Quietly reject basic bot submissions.
    if (data.companyWebsite) {
      return Response.json({ success: true });
    }

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const equipment = String(data.equipment || "").trim();
    const message = String(data.message || "").trim();
    const smsConsent = data.smsConsent === true;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 3000) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (smsConsent && !site.sms.enabled) {
      return Response.json(
        { error: "SMS enrollment is not available." },
        { status: 400 }
      );
    }

    const consentRecord = smsConsent
      ? `YES — ${new Date().toISOString()}\nConsent text: ${site.sms.purpose}; ${site.sms.frequency} ${site.sms.rates} ${site.sms.optOut} ${site.sms.help}`
      : "No SMS consent given.";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeEquipment = escapeHtml(equipment || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const safeConsent = escapeHtml(consentRecord).replace(/\n/g, "<br>");

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      html: `
        <h2>Website inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Equipment:</strong> ${safeEquipment}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
        <p><strong>SMS consent record:</strong><br>${safeConsent}</p>
      `,
    });

    if (error) {
      return Response.json(
        { error: "The inquiry could not be sent. Please try again later." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "The inquiry could not be processed." },
      { status: 500 }
    );
  }
}