import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ExternalLink } from "lucide-react"

import Link from "next/link"

interface BlogPost {
    id: number
    title: string
    body: string
    userId: number
}

async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            next: { revalidate: 3600 },
        })

        if (!response.ok) {
            throw new Error("Failed to fetch blog posts")
        }

        const posts = await response.json()
        return posts.slice(0, 12)
    } catch (error) {
        console.error("Error fetching blog posts:", error)
        return []
    }
}

export async function BlogPage() {
    const posts = await getBlogPosts()

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-white">Blog Posts</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore my collection of blog posts for Rubikamp or &nbsp;
                        <Link href="/" className="text-white hover:underline">Home</Link>
                    </p>
                    <Badge variant="outline" className="flex items-center gap-2 w-fit mx-auto text-white">
                        <ExternalLink className="h-4 w-4" />
                        Powered by ParsaNaderi
                    </Badge>
                </div>

                {posts.length === 0 ? (
                    <Card className="max-w-2xl mx-auto">
                        <CardContent className="text-center py-12">
                            <div className="text-muted-foreground">
                                <p className="text-lg font-medium mb-2">Unable to load blog posts</p>
                                <p>Please check your internet connection and try again.</p>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Card key={post.id} className="h-full hover:shadow-lg transition-shadow duration-200 border-2 border-gray-700/50 rounded-4xl">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <Badge variant="secondary" className="text-xs">
                                            Post #{post.id}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <User className="h-3 w-3" />
                                            User {post.userId}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg leading-tight line-clamp-2">
                                        {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                                        {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
                                    </p>
                                    <div className="flex items-center gap-1 mt-4 text-xs text-muted-foreground">
                                        <Calendar className="h-3 w-3" />
                                        <span>Published recently</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground">
                        Blog posts are fetched from{" "}
                        <a
                            href="https://jsonplaceholder.typicode.com/posts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                        >
                            JSONPlaceholder API
                        </a>
                    </p>
                    <p className="text-muted-foreground font-light">
                        All rights reserved by{" "}
                        <a
                            href="https://parsanaderi.alphaedu.ir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                        >
                            ParsaNaderi
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
