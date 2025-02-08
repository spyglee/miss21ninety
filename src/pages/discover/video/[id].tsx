import '../../../app/globals.css'
import { getVideo, Video } from "@/api/video"
import AppSidebar from '@/components/ui/appSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

export default function VideoPage() {
  const router = useRouter()
  const { id } = router.query
  const [video, setVideo] = useState<Omit<Video & {videoUrl: string}, 'videoName'> | null>(null)
  const fetchVideo = useCallback(async () => {
    if (id) {
      const res = await getVideo(id as string)
      setVideo(res)
    }
  }, [id])

  useEffect(() => {
    fetchVideo()
  }, [fetchVideo])

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div>
          {video && (
            <div className="w-full h-full">
              <Plyr source={{ type: 'video', sources: [{ src: video.videoUrl, }] }} />
            </div>
          )}
        </div>
      </main>
    </SidebarProvider>
  )
}