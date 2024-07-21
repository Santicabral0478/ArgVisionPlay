export async function GetContentSpec(id: string, token: string | undefined) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    try {
      const response = await fetch(`${apiUrl}/content/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener el contenido');
      }
  
      const contentDataSpec = await response.json();
      return contentDataSpec;
  
    } catch (error: any) {
      throw new Error(error.message || 'Error al obtener el contenido');
    }
  }
  