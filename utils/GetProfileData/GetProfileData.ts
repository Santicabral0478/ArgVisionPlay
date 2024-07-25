export async function GetProfileData(userId: string | undefined, token: string | undefined) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    try {
      const response = await fetch(`${apiUrl}/users/me`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      });
  
      if (!response.ok) {
        throw new Error('Error al autenticar usuario');
      }
  
      const userData = await response.json();
      return userData;
  
    } catch (error: any) {
      throw new Error(error.message || 'Error al autenticar usuario');
    }
  }
  