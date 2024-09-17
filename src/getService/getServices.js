export const getServices = async () => {
    try {
        const services = await fetch('https://car-doctor-pro-three.vercel.app/services/api/get-all')
        const data = services.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
export const getServiceDetails = async (id) => {
    try {
        const service = await fetch(`https://car-doctor-pro-three.vercel.app/services/api/${id}`)
        const data = service.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}