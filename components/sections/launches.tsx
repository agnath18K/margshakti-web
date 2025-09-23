import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { launchesData } from "@/data/event-data"
import { CheckCircle } from "lucide-react"

export function LaunchesSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Product Launches</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unveiling Path-Breaking Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IIT (BHU) will launch a suite of transformative tools and knowledge products
            designed to revolutionize India&apos;s highway planning and operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {launchesData.map((launch) => (
            <Card key={launch.id} className="h-full bg-card/50 backdrop-blur-md hover:bg-card/80 hover:shadow-lg transition-all duration-300 group border border-border/20">
              <CardHeader className="relative">
                <div className="text-3xl mb-2">{launch.icon}</div>
                <CardTitle className="text-lg">{launch.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {launch.category}
                </Badge>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="mb-4">
                  {launch.description}
                </CardDescription>
                <div className="space-y-2">
                  {launch.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-card/50 backdrop-blur-md hover:bg-card/80 hover:shadow-lg transition-all duration-300 border border-border/20">
          <CardHeader className="text-center relative">
            <CardTitle>Transforming Highway Infrastructure</CardTitle>
          </CardHeader>
          <CardContent className="text-center relative">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              These innovations represent a quantum leap in how India plans, builds, and manages
              its highway network. From AI-powered planning tools to inclusive mobility solutions,
              each product addresses critical gaps in our infrastructure ecosystem.
            </p>
            <div className="flex justify-center gap-12">
              <div>
                <p className="text-3xl font-bold">{launchesData.length}</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold">∞</p>
                <p className="text-sm text-muted-foreground">Impact</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}