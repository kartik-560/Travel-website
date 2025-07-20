import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Mountain, Globe, Compass } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaBookOpen,
  FaSun,
  FaHandsHelping,
  FaCamera,
} from "react-icons/fa";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("story");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sunilRef = useRef(null);
  const sunilInView = useInView(sunilRef, { once: true });

  const sections = {
    story: (
      <div className="space-y-6 flex flex-col justify-start text-justify">
        <p>
          Better Bagpacking India was born out of passion, adventure, and the
          love for real, immersive travel. In 2012, our founder Sunil took his
          first step into the world of travel while balancing his studies and a
          part-time job in Shimla. From exploring hidden trails to experiencing
          India’s rich culture firsthand, he realized that travel was more than
          just destinations—it was about stories, connections, and experiences
          that last a lifetime.
        </p>
        <p>
          Today, we are proud to have crafted countless journeys that allow
          travelers to connect with India’s landscapes, people, and traditions
          in the most authentic way possible.
        </p>
      </div>
    ),
    mission: (
      <div className="flex flex-col justify-start items-start h-full overflow-y-auto px-4 md:px-8">
        <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
        <p className="text-sm sm:text-[1rem] text-gray-700 mb-4 mt-[-0.8rem]">
          To transform travel from a mere movement between places to a profound
          journey of personal discovery, cultural understanding, and meaningful
          connections.
        </p>
        <div className="grid gap-4 w-full lg:grid-cols-2">
          {[
            {
              icon: (
                <Globe className="w-10 md:w-12 h-10 md:h-12 text-blue-500" />
              ),
              text: "Global Perspectives",
            },
            {
              icon: (
                <Compass className="w-10 md:w-12 h-10 md:h-12 text-green-500" />
              ),
              text: "Sustainable Tourism",
            },
            {
              icon: (
                <Mountain className="w-10 md:w-12 h-10 md:h-12 text-purple-500" />
              ),
              text: "Authentic Experiences",
            },
            {
              icon: (
                <MapPin className="w-10 md:w-12 h-10 md:h-12 text-red-500" />
              ),
              text: "Local Empowerment",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg"
            >
              {item.icon}
              <span className="text-sm md:text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  const features = [
    {
      title: "Immersive Experiences",
      description: "Dive deep into local life, beyond the usual tourist spots.",
      icon: <FaMapMarkerAlt size={24} className="text-[#111518]" />,
    },
    {
      title: "Cultural Exchange",
      description:
        "Connect with communities, share stories, and embrace diversity.",
      icon: <FaUsers size={24} className="text-[#111518]" />,
    },
    {
      title: "Continuous Learning",
      description:
        "Expand your horizons through workshops, talks, and hands-on activities.",
      icon: <FaBookOpen size={24} className="text-[#111518]" />,
    },
    {
      title: "Balanced Leisure",
      description:
        "Find your rhythm with a mix of adventure, relaxation, and personal time.",
      icon: <FaSun size={24} className="text-[#111518]" />,
    },
    {
      title: "Community Engagement",
      description:
        "Give back to the places you visit, leaving a positive impact.",
      icon: <FaHandsHelping size={24} className="text-[#111518]" />,
    },
    {
      title: "Lasting Memories",
      description:
        "Create unforgettable moments that stay with you long after you return.",
      icon: <FaCamera size={24} className="text-[#111518]" />,
    },
  ];

  const itineraries = [
    {
      category: "Adventure & Trekking",
      items: [
        {
          title: "Leh-Ladakh Bike Trip",
          description:
            "Embark on an exhilarating bike trip through the rugged terrains of Leh-Ladakh, experiencing breathtaking landscapes and challenging trails.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCzI7nOeI4W6dPO2MiRGIRhs2ujZ4U6EW78WEtwYuW4CyVoZVs_uDaRO_zz6-YnK6bL8FyyYeu54dSe4KVVVAmmJvScdabw8f-rkEFg6NdYW2yUG9dDvrdN7LzMZDWXFlBdgwYhaMuwEFUgkDW7kRX46GT63iTse2qVc0RTZ_eGDMo1WhbqrcVqjkU7tDS2orLKwu7CFJe9Pyd40FmzHzsvaPaGXIqxSx__iY2HSADNM6b-myNv5l3iJRSiKW0Pnu0M0gn0WLXX1A",
        },
        {
          title: "Spiti Valley Adventure",
          description:
            "Discover the hidden gem of Spiti Valley with its stunning mountain vistas, ancient monasteries, and thrilling adventure activities.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDVV00VRRqKWQcMgdpDz2fwCDK_DeuTWac6S72W5hguUxsddJkKXx9q3d4qZoHf1SF6TrD_gtT4IySvghpgUWrpH7p2fL8XYC6mm89j2_waIuJIyqP7tNAhTiq0_NC66NI32QRQQKmbM-EoxF_tAI__4P8sL8gkcMbFuBYs4v0ctHCHR6npWN-YZuS9CvpK28nMGBOcoxMudayJr8m1qQVj_-seo1UJgnBF2Kj4FzPBjRV5D-ArYskUpSfny4yjlNqb4jSwd4nJfw",
        },
      ],
    },
    {
      category: "Cultural & Heritage Tours",
      items: [
        {
          title: "Rajasthan Royal Heritage Tour",
          description:
            "Immerse yourself in the rich history and culture of Rajasthan, exploring majestic forts, palaces, and vibrant cities.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBxaLBZyJTRGNDA_yPICT6qbqjl1Cil539FkRlWbMMFkYgN2CtcYojrTlpBSPiyyZ_JR2TeXLQO5jweyME-KnOIPJgHnNCozwEckhnCYYN-_FKww2n6b_-6pc6dHk2KiArcoecv9reM6E6odEw_RLdQmli6AyNbAMEt6XRG6tw1e51RhjXx6iBDyVaIk04Swa4-Dw7wF0y5YQROhAjzLlYRGg7Yjo_CmLpI_ZNIO2R868ZkWG_cVk5gp5x9Ayt5gz6acQlq_O9_GA",
        },
        {
          title: "Banaras & Spiritual India",
          description:
            "Experience the spiritual heart of India in Banaras, with its ancient temples, sacred ghats, and profound cultural traditions.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDwYBQ2ZmNLE29DpCuSsf4NQU2VsSv3FObI6ihW3WlA6co2tz2MJwb6mK2h5moSx5AQRbssvUpEH35KQUvQ7yBItKr0iHe26b8Poom1ccThUYx3FN3zz2jdRFCLSmxhZi9sGo8IGjvTf_2-KbT2dMC3ZE0Wj6uPHVCHT1mEitA4QXOyh3krbogZV89evnydbGfm2UgjzYwk1a_NtVtpa_ZzPg5CeSDPfwZigNZkfS8ahYBsbmQYo16RGZ-0k4OLlAckdi3uyCBlvw",
        },
        
      ],
    },
    {
    category: "Leisure & Offbeat Escapes",
    items: [
      {
        title: "Andaman & Nicobar Islands",
        description:
          "Relax on the pristine beaches of Andaman & Nicobar Islands, indulge in water sports, and explore the unique marine life.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDC18zXRvdpwbllIssyas7fJVGZJH5vA5FIEM7MVT0Kk97nxS-jw8r6fep8J04EoF8IHXD17tPjFS0OfPlOocHSdUL_iLAzZeFzjm6g29_V5czIbZlFypJYpS-SBiWCUW-PzGx7fI7gWgKjXWnkIfaYg6xhxhs-xXV_wEI3gpH_96IRDKCb39L6cqzf_lTGxedrqNP7-M1qJkiofd_EOVF3t_RfJdO-VO_dmnuN_3oG4ap7CVBHjqkMIH3paI5mZB42DZORYy7RLg",
      },
      {
        title: "Goa & Gokarna Beach Retreat",
        description:
          "Unwind in the laid-back atmosphere of Goa and Gokarna, enjoying beautiful beaches, vibrant nightlife, and serene coastal landscapes.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBItR9uB3hxZRRJR2NfXQkcvPzji4G5bGGkZgSXxy3tPjITQhZ8VGMkXt8-X--ntVNp7DASr6nJzzakh7NB33iDh53zcEYU_mTieG3kPBK1Ta5-4zVE_Tl_-LDdhc1ztnYij8JCBy1pP-XLs8SThtGun73vXPKdnVLtnTKO8C8ytPQzwSoblgpeLnk6sO6zBTOutRyj0d8rXpz0r2YJbwLyVsgBORvouUU--z8E2eoBLKOtf5rh0HbHdKGza6Su1I366lmTbK7ZBw",
      },
    ],
  },
  {
    category: "Spiritual & Wellness Retreats",
    items: [
      {
        title: "Rishikesh Yoga & Meditation Tour",
        description:
          "Rejuvenate your mind and body with a yoga and meditation retreat in Rishikesh, nestled in the foothills of the Himalayas.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDz81--9kj25zHkrNKHA2Yqb962REYLSBuwnc_y6ULUx2Jd7POqx92KVql3FjXi9OS1sB5lyBCQKYdrFa0P27DCqvzLdF8TpkyvvNhSEUdCVoyseXBw8jKeuwTgQvJVrDqslQcWEB-0VTCNT7hYF4v0xVIpJLW84s_uICCHyDvCBgzqe2e752cmKE7FERigkwWaQwT1TXdBGOjczhMz4S2sAg_ocS0-VQb17Ypuj8hLPc-8dEejlQOe9Xjh5sdVfVXIlp4htUGlVg",
      },
      {
        title: "Himalayan Monastery Stay",
        description:
          "Find peace and tranquility with a stay in a Himalayan monastery, experiencing the serene lifestyle and spiritual practices of monks.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDOa7kGyszD5Z_5JaQqAKSQ8N3xF8Cki7sC1jlaNp3IlkudvhB0-W3Vduf66c0EZBogEa-xvizcJy0Uq4ljcdFTAkWDmGp1WzYIcyZ9d6jsLZ5Fe0nfgQ8p90s6KN07vaxWePqG9TLfh3Hj60mc1xq0epg6ZxYjlNNWMcl5MwvaJr-018mIH2kgIpe0UNLx00rSSUXi2EneJGpjEkwEfts1LUVCEifFtJt22R1rg8NdReUyS_ucuRJKON60eXUv1pASEXAq1WxlVw",
      },
    ],
  },
  ];

  return (
    <>
      {/* Section 1: Wanderlust */}
      <div
        ref={ref}
        className="min-h-[80vh] bg-white pt-16 pb-6 px-4 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-[90%] bg-white rounded-3xl flex flex-col md:flex-row"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-3xl bg-red-500">
            <img
              src="/assest/icon.webp"
              alt="Travel"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-grow p-4 md:p-6 h-[450px] lg:h-[550px]">
            <h1 className="text-4xl font-bold mb-6 text-black">
              Wanderlust Chronicles
            </h1>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeSection === section
                      ? "bg-orange-500 text-white"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Section Content */}
            <div className="flex-grow w-full overflow-hidden relative items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 overflow-auto pr-2"
                >
                  {sections[activeSection]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 2: Meet Sunil (with animation) */}
      <motion.section
        ref={sunilRef}
        className="bg-[#fdfaf9] py-12 px-6 w-full mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={sunilInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={sunilInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Meet Sunil – The Heart of Every Journey
            </h2>
            <p className="text-gray-800 leading-relaxed mb-6">
              Sunil, the founder, is more than just a travel planner; he’s your
              personal travel companion. With a passion for India’s rich culture
              and landscapes, Sunil ensures every journey is tailored to your
              desires. He’s available 24/7, offering personalized attention and
              often travels alongside clients, making your experience truly
              unforgettable.
            </p>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-full transition duration-200">
              Plan Your Trip With Us →
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: 40 }}
            animate={sunilInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assest/Team/sunil.jpg"
              alt="Portrait of Sunil"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
        </div>
      </motion.section>

      <section className="px-6 py-16 bg-white max-w-5xl mx-auto space-y-12">
        {/* Section 1 */}
        <div className="space-y-4">
          <img
            src="/assest/Nature/mountains.webp"
            alt="Mountains"
            className="w-full h-[400px] rounded-xl"
          />
          <h2 className="text-xl sm:text-2xl font-semibold">
            Why Choose Better Bagpacking India?
          </h2>
          <p className="text-gray-700">
            Unlike big travel agencies that rely on third-party vendors, Better
            Bagpacking India ensures a fully personalized, hassle-free, and
            immersive experience.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <img
            src="/assest/Nature/beach.avif"
            alt="Beach"
            className="w-full h-[300px] rounded-xl"
          />
          <h3 className="text-lg sm:text-xl font-semibold">
            End-to-End Travel Solutions – We Handle Everything!
          </h3>
          <p className="text-gray-700">
            From the moment you decide to travel till you're safely back home,
            we take care of every little detail so you can focus on enjoying the
            journey.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>☑ Flight & Train Bookings – No stress, just smooth travels.</li>
            <li>
              ☑ Hotel & Homestay Arrangements – Handpicked stays that match your
              vibe.
            </li>
            <li>
              ☑ Road Travel & Transfers – Safe & comfortable transport
              solutions.
            </li>
            <li>
              ☑ Local Food & Culinary Experiences – Savor authentic flavors
              curated by us.
            </li>
            <li>
              ☑ Permits & Travel Documentation – Hassle-free permissions & legal
              requirements.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <img
            src="/assest/Nature/van.jpg"
            alt="Travel Van"
            className="w-full h-[500px] rounded-xl"
          />
          <h3 className="text-lg sm:text-xl font-semibold">
            Led by Experts, Not Vendors
          </h3>
          <p className="text-gray-700">
            Unlike travel companies that outsource services, we are personally
            involved in every journey. Our founder, Ethan & his expert team
            handle everything hands-on to ensure a seamless, safe, and
            unforgettable experience.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <img
            src="/assest/Nature/lake.jpg"
            alt="Lake view"
            className="w-full h-[400px] rounded-xl"
          />
          <h3 className="text-lg sm:text-xl font-semibold">
            Authentic & Immersive Travel Experiences
          </h3>
          <p className="text-gray-700">
            We don’t believe in generic tours. Every trip is designed for deep
            cultural experiences, real connections, and meaningful adventures.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-4">
          <img
            src="/assest/Nature/support.png"
            alt="Support"
            className="w-full h-[400px] rounded-xl"
          />
          <h3 className="text-lg sm:text-xl font-semibold">
            24/7 Assistance & On-Ground Support
          </h3>
          <p className="text-gray-700">
            Lost luggage? Need last-minute changes? Want to explore an unplanned
            spot? We’re available round the clock to make sure your journey
            stays smooth and stress-free.
          </p>
          <p className="text-gray-700">
            Better Bagpacking India is not just a travel company—it’s your
            trusted travel partner, ensuring a comfortable, memorable, and
            authentic experience.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Let's Plan Your Journey
          </button>
        </div>
      </section>

      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div>
                <div className="p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKoBcr3sgBuqMtHfFoo4ZK8sllC_fNY3XJGRbS9VtbaRGgzNoTUpGGIyT7F8TDA466FkYEJirXn92pVStv5qw9XTtS-cyWCd5EZqMMTCSKhQoK8LDQCUOSQ7axKcYJOo0Hy9he0VKY7kmwglLmpNDW7fhyGnkTcS-w9jS8tyhCeo81G23kJcA0t7ep9CkMv4sC89_jfPVxLstZuiTJjETVEOLmtG7w3hRVGYyIRcfCpJUYzptwNDcBi29c5GZ3GEwDmTpXs_jfOsg")',
                    }}
                  >
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                        Explore India with EXCeLLeC
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal sm:text-base">
                        Immersive journeys, cultural exchange, continuous
                        learning, balanced leisure, community engagement, and
                        lasting memories.
                      </h2>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#1990e5] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base">
                      <span className="truncate">Discover Your Journey</span>
                    </button>
                  </div>
                </div>
              </div>

              <section className="px-4 py-8">
                <h2 className="text-[#111518] text-xl font-bold mb-4">
                  Our Travel Philosophy: EXCeLLeC
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 p-4 border border-[#dce1e5] rounded-lg bg-white"
                    >
                      <div className="text-[#111518]">{feature.icon}</div>
                      <h3 className="text-base font-bold text-[#111518] leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#637888]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* <div className="text-center py-10">
                  <h1 className="text-[#111518] text-2xl font-bold max-w-xl mx-auto mb-6">
                    Ready to embark on an unforgettable journey?
                  </h1>
                  <button className="bg-[#1990e5] text-white font-bold text-sm px-5 py-3 rounded-lg">
                    Start Planning Your Trip
                  </button>
                </div> */}
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          <div className="p-4">
            <p className="text-[#111418] text-[32px] font-bold leading-tight min-w-72">
              Explore Itineraries
            </p>
          </div>

          {itineraries.map((section, index) => (
            <div key={index}>
              <h2 className="text-[#111418] text-[22px] font-bold px-4 pb-3 pt-5">
                {section.category}
              </h2>
              <div className="flex overflow-x-auto no-scrollbar">
                <div className="flex gap-3 p-4">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-4 rounded-lg min-w-[240px]"
                    >
                      <div
                        className="w-full aspect-video bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div>
                        <p className="text-[#111418] text-base font-medium">
                          {item.title}
                        </p>
                        <p className="text-[#637588] text-sm font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
