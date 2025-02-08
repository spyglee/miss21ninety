export type Video = {
  _id: string
  title: string
  description: string
  videoName: string
  createdAt: string
}

export const uploadVideo = async (video: File, onProgress: (progress: number) => void) => {
  const formData = new FormData();
  formData.append('file', video);
  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${process.env.NEXT_PUBLIC_API_URL}/video/upload`, true);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        onProgress(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`Upload failed with status: ${xhr.status}`));
      }
    };

    xhr.onerror = () => reject(new Error('Upload failed due to a network error'));

    xhr.send(formData);
  });
}

export const saveVideo = async (body: {
  title: string
  description: string
  videoName: string
}) => {
  try {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

export const getVideos = async () => {
  try {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

export const getVideo = async (id: string) => {
  console.log('ID', id)
  try {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return res.json()
  } catch (error) {
    throw error
  }
}