import BlogListStandard from "@/components/blog/BlogListStandard";
import WhyChoose from "@/components/home1/WhyChoose";
import SectionTop from "@/components/shared/SectionTop";

const BlogStandard = () => {
  return (
    <>
      <SectionTop title="Blog Standard" />
      <BlogListStandard />
      <WhyChoose />
    </>
  );
};

export default BlogStandard;
