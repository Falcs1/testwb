import Details from "@/components/blog/Details";
import WhyChoose from "@/components/home1/WhyChoose";
import SectionTop from "@/components/shared/SectionTop";
import NotFound from "../../../404";

interface Params {
  id: string;
}

// Generate static paths for blog posts
export function generateStaticParams() {
  // Generate paths for blog IDs 1-9 (you can adjust this based on your actual blog posts)
  return Array.from({ length: 9 }, (_, i) => ({
    id: String(i + 1),
  }));
}

const BlogDetails = async ({ params }: { params: Params }) => {
  console.log(params.id)
  return (
    <>
      {
        params.id ?
          <>
            <SectionTop title="Blog Details" />
            <Details id={params.id} />
            <WhyChoose />
          </>
          :
          <NotFound />
      }

    </>
  );
};


export default BlogDetails;
