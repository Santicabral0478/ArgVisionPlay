interface ProfileData {
  userId: string;
  name?: string;
  email?: string;
  phone?: string;
  age?: number;
  genre?: string;
}

export const changeProfileData = async (profileData: ProfileData, token: string | undefined) => {
  console.log(profileData);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(profileData)      
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating profile data:', error);
    throw error;
  }
};
