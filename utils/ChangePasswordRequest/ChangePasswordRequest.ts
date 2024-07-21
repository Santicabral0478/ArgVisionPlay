
export async function ChangePasswordRequest( email: string ) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users/reset-password-req`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return false;
    }

    return true

  } catch (error: any) {
    return false
  }
}

export default ChangePasswordRequest;
