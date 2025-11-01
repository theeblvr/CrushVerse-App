import { resendClient, sender } from "../config/resend.js";
import { createWelcomeEmailTemplate } from "../templates-emails/welcome.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: [email],
        subject: "Welcome to CrushVerse!",
        html: createWelcomeEmailTemplate(name, clientURL)
    });
    if (error) {
        console.log("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully:", data);
};