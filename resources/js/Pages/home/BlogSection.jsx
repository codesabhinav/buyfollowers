const blockContnet = [
    {
        image: "assets/images/blog-1.webp",
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        image: "assets/images/blog-1.webp",
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        image: "assets/images/blog-1.webp",
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        image: "assets/images/blog-1.webp",
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
];

const BlogSection = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center gap-8 mt-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-pink-400">
                    Blogs
                </h3>

                <div className="flex gap-8 flex-wrap justify-center">
                    {blockContnet.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col gap-4 w-72 py-6 px-4 bg-pink-500/85 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 hover:rotate-3d hover:shadow-lg hover:translate-z-10"
                        >
                            <div className="w-full">
                                <img
                                    src={item.image}
                                    alt="blog-image"
                                    className="rounded-md shadow-xl w-full"
                                />
                            </div>

                            <div className="flex flex-col items-center">
                                <h1 className="text-lg text-white font-semibold">
                                    {item.heading}
                                </h1>
                                <p className="text-sm text-white font-semibold">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogSection;
