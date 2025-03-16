import Head from "next/head";
import Image from "next/image";

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          AI & IT News - Stay Updated with Latest Trends | Skode Labs
        </title>
        <meta
          name="description"
          content="Stay updated with the latest AI and IT news, trends, and insights. Our blog covers topics such as machine learning, AI development, IT innovations, and more."
        />
        <meta
          name="keywords"
          content="AI news, IT news, machine learning, artificial intelligence, IT trends, SEO, AI development"
        />
        <meta
          property="og:title"
          content="AI & IT News - Stay Updated with Latest Trends | Skode Labs"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest AI and IT news, trends, and insights. Our blog covers topics such as machine learning, AI development, IT innovations, and more."
        />
        <meta property="og:image" content="/images/blog-thumbnail.jpg" />
        <meta property="og:url" content="https://www.skode-labs.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@skodelabs" />
        <meta name="twitter:title" content="AI & IT News Blog | Skode Labs" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest AI and IT news, trends, and insights."
        />
        <meta name="twitter:image" content="/images/blog-thumbnail.jpg" />
      </Head>

      <section className="bg-gray-100/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center  mb-12">
            Latest AI & IT News
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Blog Post 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/ai.png"
                alt="AI News"
                width={800}
                height={480}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  AI Innovations in 2025: What&apos;s Next?
                </h3>
                <p className="mt-4 text-gray-600">
                  The AI landscape is evolving rapidly, and in this article, we
                  explore the cutting-edge innovations that are shaping the
                  future of AI. From machine learning advancements to new
                  AI-powered tools, discover what&apos;s next.
                </p>
                <a
                  href="https://www.technologyreview.com/2025/01/08/1109188/whats-next-for-ai-in-2025/"
                  className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/software.png"
                alt="IT Trends"
                width={800}
                height={480}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Top IT Trends You Need to Know in 2025
                </h3>
                <p className="mt-4 text-gray-600">
                  Stay ahead of the curve by learning about the most important
                  IT trends for 2025. Cloud computing, cybersecurity, and
                  blockchain technology are just a few of the topics covered in
                  this comprehensive guide.
                </p>
                <a
                  href="https://www.gartner.com/en/articles/top-technology-trends-2025"
                  className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/automation.png"
                alt="Machine Learning"
                width={800}
                height={480}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  The Machine Learning Revolution: How It&apos;s Changing
                  Industries
                </h3>
                <p className="mt-4 text-gray-600">
                  Machine learning is transforming industries at an
                  unprecedented rate. In this post, we dive into how machine
                  learning is revolutionizing sectors like healthcare, finance,
                  and marketing.
                </p>
                <a
                  href="https://www.forbes.com/sites/allbusiness/2018/10/20/machine-learning-artificial-intelligence-could-transform-business/"
                  className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
