import { IContent } from "@/app/(rootLayout)/content/Content";

export const GetContentByCategory = async (category: string): Promise<IContent[]> =>{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try{
        const response = await fetch(`${apiUrl}/content/bycategory`, { 
            method: 'POST',
            headers: {
                'Content-type': 'application/json' 
            },
            body: JSON.stringify({category}),
        })

        if (!response.ok){
            throw new Error(`Error: ${response.statusText}`);
        }

        const dataCategory = await response.json()
        const dataCategoryFilter = dataCategory.sort((a: IContent, b: IContent)=> b.year - a.year).slice(0, 5); 
        console.log(dataCategoryFilter);
        return dataCategoryFilter;

    }catch (error) {
        console.error('Error geting profile favorite data:', error);
        throw error;
    }

}