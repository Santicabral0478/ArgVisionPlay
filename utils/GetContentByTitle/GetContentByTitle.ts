export const GetContentByTitle = async (title: string | undefined)=>{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try{
        const response = await fetch(`${apiUrl}/content/bytitle`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({title})
        });

        if(!response.ok){
            throw new Error (`Error: ${response.statusText}`)
        }

        const contentData = await response.json()
        return contentData;
    } catch(error){
        throw error
    }
}