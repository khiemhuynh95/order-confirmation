import { transporter } from "../../config/nodemailer";
import { render } from '@react-email/render';
import { Email } from '../../components/email';
import {generateANumber} from '../../components/utils'

const generateHTML = (data) => {
  return render(<Email 
      name={data.name} 
      email={data.email} 
      address={data.address}
      city={data.city}
      state={data.state} 
      zip={data.zip}  
      phone={data.phone_number} 
      order={data.order_number} 
      cc={data.last_4_cc} />
  
  );
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
        !data || 
        !data.name || 
        !data.email || 
        !data.address || 
        !data.city ||
        !data.state ||
        !data.zip ||
        !data.phone_number) {
      return res.status(400).send({ message: "Bad request" });
    }
    try {
      data.order_number = data.order_number || generateANumber(6);
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: data.email,
        html: generateHTML(data),
        subject: `Order Confirmation (#${data.order_number})`
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
