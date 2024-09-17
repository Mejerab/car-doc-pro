export const getServices = async () => {
    const services = await fetch('http://localhost:3000/services/api/get-all')
    const data = services.json();
    return data;
}
export const getServiceDetails = async (id) => {
    const service = await fetch(`http://localhost:3000/services/api/${id}`)
    const data = service.json();
    return data;
}