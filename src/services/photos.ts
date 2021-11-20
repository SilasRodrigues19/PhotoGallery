import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { v4 as createId } from 'uuid';

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder);

  for (let photo in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[photo]);

    list.push({
      name: photoList.items[photo].name,
      url: photoUrl
    });
  }
  return list;
}

export const insert = async (file: File) => {
  if (['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {

    let randomName = createId();
    let newFile = ref(storage, `images/${randomName}`)

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoUrl
    } as Photo;

  } else {
    return new Error('Tipo de arquivo não permitido');
  }
}