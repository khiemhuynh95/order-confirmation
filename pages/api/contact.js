import { transporter } from "../../config/nodemailer";
import { orderTemplate } from "../../templates/html/order";
import {generateANumber, getCurrentFormattedTime ,generateApprovalCode} from "./utils"

const generateHTML = (data) => {
  return orderTemplate
      .replace(/{name}/g, data.name)
      .replace(/{email}/g, data.email)
      .replace(/{phone#}/g, data.phone_number)
      .replace(/{address}/g, data.address)
      .replace(/{ref#}/g, generateANumber(14))
      .replace(/{transaction#}/g, generateANumber(15))
      .replace(/{time}/g, getCurrentFormattedTime())
      .replace(/{cc#}/g, '2660')
      .replace(/{dev#}/g, generateANumber(3))
      .replace(/{shipping#}/g, generateANumber(6))
      .replace(/{app_code}/g, generateApprovalCode());
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.address || !data.phone_number) {
      return res.status(400).send({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: data.email,
        html: generateHTML(data),
        subject: `Order Confirmation (#${generateANumber(6)})`
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
