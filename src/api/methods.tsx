export async function getTopSales() {
    try {
        const request = await fetch('http://localhost:7070/api/top-sales');
        if (request.ok) {
            const data = await request.json();
            return data;
        }
    } catch (error) {
      console.log(error)   
    }
}

export async function getCard(id: string) {
    try {
      const request = await fetch(`http://localhost:7070/api/items/${id}`);
      if (request.ok) {
          const data = await request.json();
          return data;
      }
    } catch (error) {
      console.log(error);
      }  
}
  