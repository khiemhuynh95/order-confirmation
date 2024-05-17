import { mailOptions, transporter } from "../../config/nodemailer";
import { orderTemplate } from "../../templates/html/order";
const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};


const fields = {
  name: "Mon Nguyen",
  email: "@gmail.com",
  address: "2913 Naples Dr"
}

const generateHTML = (data) => {
  //data is passed from form and should replace fields
  return orderTemplate
      .replace(/{name}/g, fields.name)
      .replace(/{email}/g, fields.email)
      .replace(/{address}/g, fields.address);
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
        subject: data.subject,
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
