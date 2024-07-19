import Cookie from "js-cookie";

export async function loginRequest(email: string, password: string){
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Error al autenticar usuario');
    }

    const data = await response.json();
    const { token } = data;
    const { idUser } = data;

    Cookie.set("token", token);
    Cookie.set("idUser", idUser);
    window.location.href = '/';

  } catch (error: any) {
    throw new Error(error.message || 'Error al autenticar usuario');
  }
}



