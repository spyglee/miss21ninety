import '../../../app/globals.css'
import AppSidebar from "@/components/ui/appSidebar";
import checkToken from "@/helpers/checkToken";
import { SidebarProvider } from "@/components/ui/sidebar";
import { GetServerSidePropsContext } from "next";
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getVideos, saveVideo, uploadVideo, Video } from '@/api/video';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/router';
import Link from 'next/link';

const videoForm = z.object({
  title: z.string(),
  description: z.string(),
})

export default function Videos() {
  const [video, setVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [videos, setVideos] = useState<Video[]>([])
  const form = useForm<z.infer<typeof videoForm>>({
    resolver: zodResolver(videoForm),
    defaultValues: {
      title: '',
      description: '',
    },
  })
  const router = useRouter()
  const onUploadVideo = async() => {
    if (!video) return;
    const data = await uploadVideo(video, setProgress)
    if (typeof data === 'object' && data !== null && 'videoName' in data) {
      setVideoUrl(data.videoName as string)
    }
  }

  const onSaveVideo = async (data: Partial<{
    title: string
    description: string
  }>) => {
    if (!videoUrl || !data.title || !data.description) return;
    const body = {
      title: data.title,
      description: data.description,
      videoName: videoUrl
    }
    const res = await saveVideo(body)
    console.log(res)
    router.reload()
  }

  const fetchVideos = async () => {
    const res = await getVideos()
    setVideos(res.videos)
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  console.log(videos)

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <h1>Videos</h1>
        <Input
          placeholder="Video"
          disabled={progress > 0}
          type='file'
          accept='video/*'
          className='w-full'
          onChange={(e) => setVideo(e.target.files?.[0] ?? null)}
        />
        <Button disabled={!video || progress > 0} onClick={onUploadVideo}>Upload</Button>
        {progress > 0 && progress < 100 && <Progress value={progress} />}
        {progress === 100 && <p>Uploaded</p>}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSaveVideo)}>
            <FormField
                control={form.control}
                name="title"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input autoComplete="title" type="text" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input autoComplete="description" type="text" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button disabled={!videoUrl} type="submit">Save</Button>
          </form>
        </Form>
        {videos?.length > 0 && (
          <div className='grid grid-cols-3 gap-4'>
            {videos.map((video) => (
              <div key={video._id}>
                <Link href={`/discover/video/${video._id}`}>
                  <p>{video?.title}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </SidebarProvider>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const token = context?.req?.cookies?.token
  const user = await checkToken(token ?? '')
  if (!user) {
    return {
      redirect: { destination: '/' }
    }
  }
  return {
    props: {}
  }
}