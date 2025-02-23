import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, Globe, Award, BookOpen, Code } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background w-full">
      <div className="flex-1 w-full max-w-7xl items-center justify-between mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">GOWTHAM KUMAR VULLURI</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Full Stack Engineer</p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link href="tel:+919010021630" target="_blank">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Phone
              </Button>
            </Link>
            <Link href="mailto:gowthamkumarvulluri@gmail.com" target="_blank">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Mail
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Globe className="w-4 h-4 mr-2" />
                Portfolio
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/gowthamkumarvulluri" target="_blank">
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/gowtham-prog" target="_blank">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </Link>
            <Link href="https://leetcode.com/u/gowthamkumarvulluri/" target="_blank">
              <Button variant="outline" size="sm">
                <Code className="w-4 h-4 mr-2" />
                Leetcode
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 ">Skills</h2>
        <div className="grid gap-4 ">
          <div className="space-y-4">
            <h3 className="font-medium">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript", "C++", "HTML5", "CSS"].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Libraries/Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {["Django", "Django REST", "React", "Redux", "TailwindCSS", "Shopify", "Next.js", "Vue.js", "Node.js"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Tools/Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "AWS", "Linux", "Postman", "VS Code", "Jupyter Notebook", "Docker", "Celery", "Shopify"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="grid gap-6">
          <Card >
            <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Full Stack Engineer</CardTitle>
                  <Link href="https://tryonlabs.ai/" target="_blank">
                    <Button variant="ghost" size="sm">
                      View Employment
                    </Button>
                  </Link>
                </div>

              {/* <CardTitle>Full Stack Engineer</CardTitle> */}
              <CardDescription>TryOn Labs • Jul 2023 – Present</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Engineered and launched scalable web components within Playground By TryOnLabs and TryOn AI projects
                </li>
                <li>
                  Built and deployed 30+ RESTful APIs and 20+ reusable UI components
                </li>
                <li>
                  Integrated the Cashfree payment gateway singlehandedly, ensuring seamless payment processing.
                </li>
                <li>
                  Leveraged Django, React, Shopify API, Docker, and AWS to develop secure, scalable web applications
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Shopify Developer (Freelance)</CardTitle>
                  <Link href="https://videoit.io/" target="_blank">
                    <Button variant="ghost" size="sm">
                      View Employment
                    </Button>
                  </Link>
                </div>
              {/* <CardTitle>Shopify Developer (Freelance)</CardTitle> */}
              <CardDescription>VideoIt • July 2024 – Nov 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Constructed and optimized a Shopify-based video shopping platform</li>
                <li>Enhanced video streaming performance by through HLS (HTTP Live Streaming) integration</li>
                <li>Revamped website animations and transitions for a more fluid shopping experience</li>
                <li>Leveraged Liquid, Shopify API, JavaScript, and CSS to customize themes</li>
              </ul>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
                <div className="flex items-center justify-between">
                <CardTitle>Vue/Nuxt Developer (Freelance)</CardTitle>
                  <Link href="https://gawx.ai/" target="_blank">
                    <Button variant="ghost" size="sm">
                      View Employment
                    </Button>
                  </Link>
                </div>
              {/* <CardTitle>Vue/Nuxt Developer (Freelance)</CardTitle> */}
              <CardDescription>Gawx.ai • January 2025 – Present</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Building Gawx AI, Empowering data scientists to work smarter, faster, and with less friction</li>
                <li>Constructing minimalistic Vue/Nuxt-based data cleaning platform</li>
                {/* <li>Revamped website animations and transitions for a more fluid shopping experience</li>
                <li>Leveraged Liquid, Shopify API, JavaScript, and CSS to customize themes</li> */}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>Gayatri Vidya Parishad College of Engineering</CardTitle>
            <CardDescription>B.Tech, Computer Science • CGPA: 7.17</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Aug 2019 - Apr 2023 • Visakhapatnam, India</p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6">
          {/* Playground by TryOnLabs */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Playground by TryOnLabs</CardTitle>
                <Link href="https://playground.tryonlabs.ai/" target="_blank">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Interactive AI platform enabling Virtual Garment Try-ons, Model Generations, Model Swaps, Outfit Generations and Outfit Captions, serving 600+ users with 99.9% uptime.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Redux", "TailwindCSS", "Django", "SQLite"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* TryOn AI */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>TryOn AI - Shopify Extension</CardTitle>
                <Link href="https://apps.shopify.com/tryonlabs-tryon-app" target="_blank">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Virtual Try-On solution for D2C fashion brands, serving 50+ merchants with 25% increased satisfaction.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TailwindCSS", "Shopify API", "Liquid"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* VideoIt */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>VideoIt - Video Shopping</CardTitle>
                <Link href="https://videoit.io/" target="_blank">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Shopify video platform with HLS streaming, serving 1000+ users with 30% enhanced performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "Liquid", "JavaScript", "CSS"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Medical Recommendation System */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Medical Recommendation System</CardTitle>
                <Link href="https://github.com/gowtham-prog/major_project" target="_blank">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Symptom-based disease detection system with 80% diagnostic accuracy and physician booking.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Django", "Django REST", "MySQL", "JavaScript"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="grid gap-4">
          <Link href="https://www.hackerrank.com/certificates/2e57d67850b9" target="_blank" className="block">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <CardTitle className="text-base">HackerRank - Python Certification</CardTitle>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/abfd67044b27" target="_blank" className="block">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <CardTitle className="text-base">HackerRank - Problem Solving Certification</CardTitle>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gowthamkumar Vulluri. All rights reserved.
        </p>
      </footer>
      </div>
    </div>
  )
}

