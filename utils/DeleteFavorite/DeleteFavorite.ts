
export const DeleteFavorite = async (movieId: string, userId: string | undefined, token: string | undefined) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/favorite`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({userId, movieId})      
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
  