import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';

init("user_jHyr9ujavZ2ewbex1heyT");
const SERVICE_ID = 'service_03ovmud';
const TEMPLATE_ID = 'template_ornfs3m';

const EmailService = {
    sendEmail: async (email: any) => {
        return await emailjs.send(SERVICE_ID, TEMPLATE_ID, email);
    }
}

export default EmailService;