import { Award, Album } from 'lucide-react'

export default function ListEvents() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Próximos Eventos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Confira nossos próximos eventos e garanta sua vaga hoje mesmo.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Event Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">June 15, 2024</span>
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-certificado-gradient text-primary-foreground text-xs font-medium">
                    <Award className="w-4 h-4" />
                    Certificado
                  </div>
                </div>
                <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                <p className="text-muted-foreground text-sm">
                  Learn the fundamentals of web development and build your first website.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Event Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">June 15, 2024</span>
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-declaracao-gradient text-primary-foreground text-xs font-medium">
                    <Album className="w-4 h-4" />
                    Declaração
                  </div>
                </div>
                <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                <p className="text-muted-foreground text-sm">
                  Learn the fundamentals of web development and build your first website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }