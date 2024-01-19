// removefav.tsx

export const removeFavoriteCoin = async (username: string, coinId: string) => {
    try {
      const response = await fetch("http://localhost:5000/favorites/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, coinId }),
      });
  
      if (response.ok) {
        const result = await response.json();
        return { success: true, message: result.message }; // Assuming your server sends a success message
      } else {
        console.error("Failed to remove coin from favorites");
        return { success: false, error: "Failed to remove coin from favorites" };
      }
    } catch (error) {
      console.error("Error removing coin from favorites", error);
      return { success: false, error: "An error occurred while removing coin from favorites" };
    }
  };
  