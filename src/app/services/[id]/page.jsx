import { getServiceDetails } from "@/getService/getServices";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Service Details',
    description: 'Services details page'
}

const page = async ({ params }) => {
    const data = await getServiceDetails(params.id);
    const { _id, title, img, price, description, facility } = data.service;
    return (
        <div>
            <div className="w-full bg-black">
                <p className="text-white text-3xl font-semibold p-24">Services details</p>
            </div>
            <div className="grid grid-cols-3 gap-x-4 my-6">
                <div className="col-span-2">
                    <div className="">
                        <Image className="h-[26rem] w-full rounded-2xl" src={img} height={50} width={700} alt="service" />
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-black">{title}</h3>
                            <p className="text-gray-500 text-sm">{description}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-6">
                        {
                            facility.map((item, idx) =>
                                <div className="p-5 border-t-2 border-primary rounded-2xl bg-gray-200" key={idx}>
                                    <h5 className="text-lg font-semibold">{item?.name}</h5>
                                    <p className="text-gray-500 text-sm">{item?.details}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="rounded-2xl">
                    <Image className="w-full rounded-2xl" src={img} height={200} width={400} alt="service" />
                    <p className="text-xl my-6 text-primary font-medium">price: {price}</p>
                    <Link href={`/check/${_id}`}><button className="text-white w-full btn bg-primary">Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default page;