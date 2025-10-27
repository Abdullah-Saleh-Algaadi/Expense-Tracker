const nodemailer = require("nodemailer");

/**
 * Sends a booking confirmation email to the user
 * @param {Object} bookingData - The booking details
 * @param {Object} user - The user details (name, email)
 */
async function sendBookingConfirmation(bookingData, user) {
  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // HTML email template
  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background: linear-gradient(to right, #1d4ed8, #3730a3); color: white; padding: 20px; text-align: center;">
        <h1>✅ Booking Confirmed</h1>
        <p>Yemen Bus Transportation</p>
      </div>
      <div style="padding: 20px;">
        <h2>Hello ${user.name},</h2>
        <p>Your booking has been confirmed! Here are your ticket details:</p>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Ticket ID:</strong> ${bookingData.id}</li>
          <li><strong>From:</strong> ${bookingData.from_city}</li>
          <li><strong>To:</strong> ${bookingData.to_city}</li>
          <li><strong>Date:</strong> ${new Date(
            bookingData.date
          ).toLocaleDateString("en-US")}</li>
          <li><strong>Time:</strong> ${bookingData.departure_time}</li>
          <li><strong>Number of Seats:</strong> ${
            bookingData.number_of_seats
          }</li>
          <li><strong>Total Price:</strong> $${bookingData.total_price}</li>
        </ul>
        <div style="text-align: center; margin: 20px 0;">
          <a href="http://localhost:3000/bookingConfirmation?bookingId=${
            bookingData.id
          }" 
             style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
             View Ticket
          </a>
        </div>
        <p><strong>Note:</strong> Please arrive at least 30 minutes before departure.</p>
      </div>
      <div style="background: #f3f4f6; padding: 10px; text-align: center; font-size: 12px; color: #6b7280;">
        &copy; 2025 Yemen Bus. All rights reserved.
      </div>
    </div>
  `;

  // Email options
  const mailOptions = {
    from: `"Yemen Bus" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: `Booking Confirmation - Trip from ${bookingData.from_city} to ${bookingData.to_city}`,
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Confirmation email sent to ${user.email}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

module.exports = sendBookingConfirmation;
