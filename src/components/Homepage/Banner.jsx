import Image from "next/image";

const Banner = () => {
    return (
        <div className="carousel w-full rounded-2xl h-[87vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <Image
                    src="/assets/Rectangle 2.png"
                    className="w-full" height={400} width={1300} alt="slider"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <h2 className="text-white text-2xl right-1/2 left-1/2">Nothing 1</h2>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full" height={400} width={1300} alt="slider"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <h2 className="text-white text-2xl right-1/2 left-1/2">Nothing 2</h2>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" height={400} width={1300} alt="slider"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <h2 className="text-white text-2xl right-1/2 left-1/2">Nothing 3</h2>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" height={400} width={1300} alt="slider"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <h2 className="text-white text-2xl right-1/2 left-1/2">Nothing 4</h2>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;