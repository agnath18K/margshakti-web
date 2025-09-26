import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { partnersData } from "@/data/event-data"

const speakersData = [
  { id: 1, name: "MoRTH Chief Guest #1", designation: "Chief Guest", category: "Government", initials: "CG1" },
  { id: 2, name: "MoRTH Chief Guest #2", designation: "Chief Guest", category: "Government", initials: "CG2" },
  { id: 3, name: "Invited Speaker #1", designation: "Industry Leader", category: "Industry", initials: "IS1" },
  { id: 4, name: "Invited Speaker #2", designation: "NICDC", category: "Industry", initials: "IS2" },
  { id: 5, name: "Invited Speaker #3", designation: "DFCCIL", category: "Industry", initials: "IS3" },
  { id: 6, name: "Invited Speaker #4", designation: "Trucking Company #1", category: "Industry", initials: "IS4" },
  { id: 7, name: "Invited Speaker #5", designation: "IIT BHU", category: "Academia", initials: "IS5" },
  { id: 8, name: "Invited Speaker #6", designation: "ITSPE", category: "Academia", initials: "IS6" },
  { id: 9, name: "Invited Speaker #7", designation: "Deloitte", category: "Industry", initials: "IS7" },
  { id: 10, name: "Invited Speaker #8", designation: "World Bank/ADB", category: "International", initials: "IS8" },
  { id: 11, name: "Invited Speaker #9", designation: "DFCCIL", category: "Industry", initials: "IS9" },
  { id: 12, name: "Invited Speaker #10", designation: "Trucking Company #2", category: "Industry", initials: "IS10" },
  { id: 13, name: "Invited Speaker #11", designation: "Ministry of Defence", category: "Government", initials: "IS11" },
  { id: 14, name: "Invited Speaker #12", designation: "NHAI", category: "Government", initials: "IS12" },
  { id: 15, name: "Invited Speaker #13", designation: "Transport Corp", category: "Industry", initials: "IS13" },
  { id: 16, name: "Invited Speaker #14", designation: "Tech Solutions", category: "Industry", initials: "IS14" },
  { id: 17, name: "Invited Speaker #15", designation: "IIT Delhi", category: "Academia", initials: "IS15" },
  { id: 18, name: "Invited Speaker #16", designation: "NIT Trichy", category: "Academia", initials: "IS16" },
  { id: 19, name: "Invited Speaker #17", designation: "Urban Planners", category: "Industry", initials: "IS17" },
  { id: 20, name: "Invited Speaker #18", designation: "Logistics Expert", category: "Industry", initials: "IS18" },
]

export function SpeakersSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-width">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Speakers & Panelists</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leading Voices in Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join distinguished leaders from government, industry, academia, and defence
            shaping the future of India&apos;s highways.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {speakersData.map((speaker) => (
            <div key={speaker.id} className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-3">
                <AvatarFallback className="text-lg font-semibold">
                  {speaker.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-medium text-sm">{speaker.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">
                {speaker.designation}
              </p>
              <Badge variant="secondary" className="text-xs">
                {speaker.category}
              </Badge>
            </div>
          ))}
        </div>

        <Card className="bg-card/50 backdrop-blur-md hover:bg-card/80 hover:shadow-lg transition-all duration-300 border border-border/20">
          <CardHeader className="relative">
            <CardTitle className="text-center">Our Partners</CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">
                {partnersData.status}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}