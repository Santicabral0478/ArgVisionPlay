// http://localhost:3001/content/byrate

export async function GetContentByRate() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    try {
      const response = await fetch(`${apiUrl}/content/byrate`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener el contenido');
      }
  
      const contentDataRated = await response.json();
      return contentDataRated;
  
    } catch (error: any) {
      throw new Error(error.message || 'Error al obtener el contenido');
    }
  }
  