
export const AddToFavorite = async (userId: string | undefined, movieId: string | undefined, token: string | undefined) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/favorite`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({userId, movieId})      
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return true
    } catch (error) {
      return false
    }
  };
  