export const getServices = async () => {
    try {
        const services = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/services/api/get-all`)
        const data = services.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
export const getServiceDetails = async (id) => {
    try {
        const service = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/services/api/${id}`)
        const data = service.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}