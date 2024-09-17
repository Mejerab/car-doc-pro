import { getServices } from "@/getService/getServices";
import Image from "next/image";
import Link from "next/link.js";
import { GoArrowRight } from "react-icons/go";




const Services = async () => {
    const { services } = await getServices();
    return (
        <div>
            <div className="text-center">
                <p className="text-primary text-lg font-medium">Service</p>
                <h3 className="text-3xl my-2 font-semibold">Our Service Area</h3>
                <p className="text-gray-500 text-sm">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&lsquo;t look even slightly believable. </p>
            </div>

            {/* Services */}
            <div className="grid my-3 grid-cols-3 gap-x-5 gap-y-12">
                {
                    services.map(service => <div key={service._id} className="card bg-base-100 w-[26rem] shadow-2xl">
                        <figure className="px-10 pt-10 flex-grow">
                            <Image height={1000} width={1000}
                                src={service.img}
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <div className="flex justify-between items-center">
                                <p className="text-primary text-lg font-semibold">Price: {service.price}</p>
                                <Link href={`/services/${service._id}`}><button className="text-primary hover:bg-gray-200 btn rounded-full border-none text-2xl"><GoArrowRight /></button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;