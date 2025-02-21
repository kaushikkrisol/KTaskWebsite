import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mermaid",
    designation: "Founder @ Mermaid",
    content:
      "Since switching to this system, we’ve cut our prepress time in half! The automated preflight checks save us hours every day",
    image: "/images/mermaid.png",
    star: 5,
  },
  {
    id: 2,
    name: "Comart",
    designation: "Founder @ Comart",
    content:
      "No more email chaos! The proofing tool has made it easy for clients to review and approve files in real time.",
    image: "/images/Comart.jpg",
    star: 5,
  },
  // {
  //   id: 3,
  //   name: "William Smith",
  //   designation: "Founder @ Trorex",
  //   content:
  //     "This software is a must-have for any print shop looking to scale. The integrations with Adobe and our RIP software are seamless",
  //   image: "/images",
  //   star: 5,
  // },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap justify-center lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
