import Button from "../../../Components/Button/Button";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "../../../assets/blog/blog-1.jpg";
import img2 from "../../../assets/blog/blog-2.jpg";
import img3 from "../../../assets/blog/blog-5.jpg";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <SectionTitle heading={"Latest news"} subHeading={"News"} />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 ">
        <div id="blog" className="border rounded-md">
          <div className="overflow-hidden rounded-t-md">
            <img
              className="rounded-t-md transform duration-500 "
              src={img1}
              alt=""
            />
          </div>
          <div className="pl-5 py-2 pr-2 pb-3">
            <div className="flex text-gray-400 text-[12px] mb-4 gap-1 cursor-pointer">
              <p className="hover:text-[#ffcc00]">Uncategorized</p>/
              <p className="hover:text-[#ffcc00]">September 7, 2020</p>/
              <p className="hover:text-[#ffcc00]">Post by admin</p>
            </div>
            <h2 className="hover:text-[#ffcc00] font-semibold text-lg mb-3">
              10 Reasons To Do A Digital Detox Challenge
            </h2>
            <p className="text-[14px] mb-3 text-gray-400">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
              varius per a augue magna hac. Nec hac et vestibulum duis a
              tincidunt...
            </p>
            <Button level={"Read More"} />
          </div>
        </div>

        <div id="blog" className="border rounded-md">
          <div className="overflow-hidden rounded-t-md">
            <img
              className="rounded-t-md transform duration-500 "
              src={img2}
              alt=""
            />
          </div>
          <div className="pl-5 py-2 pr-2 pb-3">
            <div className="flex text-gray-400 text-[12px] mb-4 gap-1 cursor-pointer">
              <p className="hover:text-[#ffcc00]">Uncategorized</p>/
              <p className="hover:text-[#ffcc00]">September 7, 2020</p>/
              <p className="hover:text-[#ffcc00]">Post by admin</p>
            </div>
            <h2 className="hover:text-[#ffcc00] font-semibold text-lg mb-3">
              10 Reasons To Do A Digital Detox Challenge
            </h2>
            <p className="text-[14px] mb-3 text-gray-400">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
              varius per a augue magna hac. Nec hac et vestibulum duis a
              tincidunt...
            </p>
            <Button level={"Read More"} />
          </div>
        </div>

        <div id="blog" className="border rounded-md">
          <div className="overflow-hidden rounded-t-md">
            <img
              className="rounded-t-md transform duration-500 "
              src={img3}
              alt=""
            />
          </div>
          <div className="pl-5 py-2 pr-2 pb-3">
            <div className="flex text-gray-400 text-[12px] mb-4 gap-1 cursor-pointer">
              <p className="hover:text-[#ffcc00]">Uncategorized</p>/
              <p className="hover:text-[#ffcc00]">September 7, 2020</p>/
              <p className="hover:text-[#ffcc00]">Post by admin</p>
            </div>
            <h2 className="hover:text-[#ffcc00] font-semibold text-lg mb-3">
              10 Reasons To Do A Digital Detox Challenge
            </h2>
            <p className="text-[14px] mb-3 text-gray-400">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
              varius per a augue magna hac. Nec hac et vestibulum duis a
              tincidunt...
            </p>
            <Button level={"Read More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
