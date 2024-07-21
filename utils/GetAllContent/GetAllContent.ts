export async function GetAllContent() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    try {
      const response = await fetch(`${apiUrl}/content`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener el contenido');
      }
  
      const contentData = await response.json();
      return contentData;
  
    } catch (error: any) {
      throw new Error(error.message || 'Error al obtener el contenido');
    }
  }
  