import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoHomeOutline } from "react-icons/io5";

import ContactInfo from "../../components/ContactPage/ContactInfo";
import ContactForm from "../../components/ContactPage/ContactForm";

// Breadcrumb variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Contact', url: '/contact' },
]

const ContactPage = () => {
  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 my-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4726392184652!2d106.79500007679212!3d10.85161095779885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175274501c51a19%3A0x1a8fb5646729745d!2zVMOyYSBuaMOgIE1XRyAtIEPDtG5nIHR5IEPhu5UgcGjhuqduIFRo4bq_IEdp4bubaSBEaSDEkOG7mW5n!5e0!3m2!1svi!2s!4v1704697826746!5m2!1svi!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </>
  );
};

export default ContactPage;