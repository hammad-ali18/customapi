interface qoute{
    bookId:number,
    customerName:string
}
  import { NextResponse } from 'next/server';
  export async function GET() {
    
    
  
  const res = await fetch(`https://simple-books-api.glitch.me/orders/`,{
  headers:{
    Authorization:"Bearer abeab716007ba6441720830d15d6b680daadefe7a345b21ebcb69f673a75fc18",
    
  }
  });
  const data= await res.json();
  return NextResponse.json({ data });
}

