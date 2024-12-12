import {useState, useEffect} from 'react';


const useFetch = (dataUrl) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        
        fetch(dataUrl, {signal: abortController.signal})
        .then(response => {
            console.log(response);
            if (!response.ok){
                throw Error("Error fetching data from "+dataUrl);
            }
            return response.json()
        }).then((data) => {
            console.log(data);
            setData(data);
            setError(null);
            setIsPending(false);
        })
        .catch(e=> {
            if (e.name === "AbortError"){
                console.log("Fetch Aborted");
            }
            else{
                setData(null);
                setError(e);
                setIsPending(false);
            }
        })

        return () => abortController.abort();
    }, [dataUrl]);

    return {data, isPending, error}
}

export default useFetch;