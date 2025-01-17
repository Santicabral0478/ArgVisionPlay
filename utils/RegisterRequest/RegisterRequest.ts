
export async function RegisterRequest(name: string, email: string, password: string, phone: string, age: number, genre: string, avatar: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, phone, age, genre, avatar }),
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

export default RegisterRequest;
