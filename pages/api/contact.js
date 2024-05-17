import { transporter } from "../../config/nodemailer";
import { orderTemplate } from "../../templates/html/order";
import {generateOrderNumber, generateANumber, getCurrentFormattedTime ,generateApprovalCode} from "./utils"
const fields = {
  address: "1234 Naples Dr"
}

const generateHTML = (data) => {
  //data is passed from form and should replace fields
  return orderTemplate
      .replace(/{name}/g, data.name)
      .replace(/{email}/g, data.email)
      
      .replace(/{address}/g, fields.address)
      .replace(/{ref#}/g, generateANumber(14))
      .replace(/{transaction#}/g, generateANumber(15))
      .replace(/{time}/g, getCurrentFormattedTime())
      .replace(/{cc#}/g, '2660')
      .replace(/{dev#}/g, generateANumber(3))
      .replace(/{shipping#}/g, generateANumber(6))
      .replace(/{app_code}/g, generateApprovalCode());
};

const generateEmailContent = (data) => {
  return {
    text: '',
    html: generateHTML(data)
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }
    const mailOptions = {
      from: process.env.EMAIL,
      to: data.email
    };
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject.replace('{order#}', generateOrderNumber()),
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
