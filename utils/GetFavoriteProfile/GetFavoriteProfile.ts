
    export const GetFavoriteProfile = async (userId: string | undefined, token: string | undefined) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/favorite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({userId})      
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error geting profile favorite data:', error);
      throw error;
    }
  };
  