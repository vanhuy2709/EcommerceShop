
const ContactForm = () => {

  return (
    <div className="bg-white px-4 lg:px-[50px] py-11 shadow-lg">
      <form>
        <h2 className="text-gray-900 text-[24px] font-semibold leading-9 mb-2">Just Say Hello!</h2>
        <p className="text-gray-500 text-[14px] leading-[21px] mb-6">Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Template Cookie"
            className="text-gray-600 leading-[21px] px-4 py-[14px] rounded-md outline-none border w-full"
          />
          <input
            type="email"
            placeholder="zakirsoft@gmail.com"
            className="text-gray-600 leading-[21px] px-4 py-[14px] rounded-md outline-none border w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Message"
            className="text-gray-600 leading-[21px] px-4 py-[14px] rounded-md outline-none border w-full"
          />
        </div>
        <textarea
          placeholder="Subjects"
          className="text-gray-600 leading-[21px] px-4 py-[14px] rounded-md outline-none border w-full h-24 mb-6">
        </textarea>
        <button type="submit" className="bg-[#00B207] text-white font-semibold leading-5 px-10 py-4 rounded-full">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;