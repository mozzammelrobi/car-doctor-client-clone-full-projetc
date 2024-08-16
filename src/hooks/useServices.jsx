import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-project-sage.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                // console.log('services',data)
                setServices(data)})
    }, [])
    return services
};

export default useServices;