import Form from "@/components/Form_Proveedor"
import prisma from '@/lib/prisma'
import { deleteProveedores } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      <h3>Eliminar proveedor {searchParams.id}</h3>
      <Form action={deleteProveedores} title='Eliminar proveedor' proveedor={proveedor} disabled={true} />
    </div>
  )
}

export default page