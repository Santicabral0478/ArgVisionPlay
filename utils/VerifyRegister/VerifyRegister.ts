export async function VerifyRegister(name: string, email: string, password: string, phone: string, verificationCode: string, age: number, genre: string, avatar: string){
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, phone, verificationCode, age, genre, avatar }),
    });

    if (!response.ok) {
      return false
    }

    return true

  } catch (error: any) {
    return false
  }
}

export default VerifyRegister;
