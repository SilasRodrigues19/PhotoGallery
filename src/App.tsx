import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos'
import { Photo } from './types/Photo'
import { PhotoItem } from './components/PhotoItem'
import { Icon } from '@iconify/react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    MySwal.close();
    setLoading(false);
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insertPhoto(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.unshift(result);
        setPhotos(newPhotoList);
      }
    }
  }
  

  const handleDeleteButton = async (name: string) => {
    if (window.confirm("Realmente deseja apagar?")) {
      await Photos.deletePhoto(name);
      Swal.fire({
        title: 'Deletando',
        html: 'Aguarde, por favor...',
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      MySwal.showLoading();
      getPhotos();
    } else {
      return false;
    }
  }


  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" accept="image/*" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>
        {loading &&
          <C.ScreenWarning>
            <Icon className="emoji" icon="eos-icons:bubble-loading" />
            <div>Carregando...</div>
          </C.ScreenWarning>
        }
        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
                onDelete={handleDeleteButton} />
            ))}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <Icon className="emoji" icon="emojione-monotone:camera-with-flash" />
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;