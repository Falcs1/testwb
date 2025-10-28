import BlogSection from "@/components/blog/BlogList";
import WhyChoose from "@/components/home1/WhyChoose";
import SectionTop from "@/components/shared/SectionTop";

const Blog = () => {
  return (
    <>
      <SectionTop title="Our Blog" />
      <BlogSection />
      <WhyChoose />
    </>
  );
};

export default Blog;
