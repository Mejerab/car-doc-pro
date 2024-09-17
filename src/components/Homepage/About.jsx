import Image from "next/image";

const About = () => {
    return (
        <div className="my-7 grid grid-cols-2 gap-x-12">
            <Image className="w-" src='/assets/Group 38732.png' height={500} width={550} alt="about" />
            <div className=" flex flex-col justify-center">
                <p className="text-primary font-medium">About Us</p>
                <h3 className="text-5xl w-3/5 my-6 font-bold">We are qualified & of experience in this field</h3>
                <p className="text-gray-500 my-6 w-3/4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. <br /> <br /> <br />
                the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
                <button className="btn w-fit px-8 bg-primary text-white">Get More Info</button>
            </div>
        </div>
    );
};

export default About;