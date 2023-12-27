import Form from "@/components/Form"
import { sql } from '@vercel/postgres';
import { editArticulo } from "@/lib/actions"

async function page({searchParams}) {
  const { rows }  = await sql`select * from articulos where id = ${searchParams.id};` 
  const articulo = rows[0];

  return (
    <div>
        <h3>Editar artículo {searchParams.id}</h3>
        <Form action={editArticulo} title='Editar artículo' articulo={articulo} disabled={false}  />
    </div>
  )
}


export default page