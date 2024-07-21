
export async function VerifyChangePassword( email: string, code: string, newPassword: string ) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code, newPassword }),
    });


    if (!response.ok) {
      return false;
    }

    return true

  } catch (error: any) {
    return false
  }
}

export default VerifyChangePassword;
