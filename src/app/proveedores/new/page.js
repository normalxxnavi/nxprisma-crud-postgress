import Form from "@/components/Form_Proveedor"
import { newProveedores } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo Proveedor</h3>
        <Form action={newProveedores} title='Crear Proveedor' proveedor={null} />
    </div>
  )
}

export default page