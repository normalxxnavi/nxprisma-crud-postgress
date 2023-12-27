import Link from 'next/link'
import { revalidatePath } from 'next/cache'

export default async function Home() {
  revalidatePath('/articulos')

  return (
    <section>
      <h1>Página de inicio</h1>
      <hr />
      <Link href={"/articulos"}>Listado de artículos</Link>      
    </section>
  )
}
