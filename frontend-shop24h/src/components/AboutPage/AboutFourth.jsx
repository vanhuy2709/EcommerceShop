import BoxMember from "./BoxMember";
import member1 from '../../assets/images/about/member-1.jfif';
import member2 from '../../assets/images/about/member-2.jfif';
import member3 from '../../assets/images/about/member-3.jfif';
import member4 from '../../assets/images/about/member-4.jfif';

const AboutFourth = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        <h2 className="text-gray-900 text-[38px] lg:text-[48px] font-semibold leading-[58px] mb-3 text-center">Our Awesome Team</h2>
        <p className="text-gray-600 leading-6 mb-[50px] text-center">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BoxMember
            userImage={member1}
            userName={'Jenny Wilson'}
            userJob={'Ceo & Founder'} />
          <BoxMember
            userImage={member2}
            userName={'Jane Cooper'}
            userJob={'Worker'} />
          <BoxMember
            userImage={member3}
            userName={'Cody Fisher'}
            userJob={'Security Guard'} />
          <BoxMember
            userImage={member4}
            userName={'Robert Fox'}
            userJob={'Senior Farmer Manager'} />
        </div>

      </div>
    </div>
  );
};

export default AboutFourth;