import Form from "@/components/Form"
import { sql } from '@vercel/postgres';
import { deleteArticulo } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const { rows }  = await sql`select * from articulos where id = ${searchParams.id};` 
  const articulo = rows[0];

  return (
    <div>
      <h3>Eliminar artículo {searchParams.id}</h3>
      <Form action={deleteArticulo} title='Eliminar artículo' articulo={articulo} disabled={true} />
    </div>
  )
}

export default page