import { selectRandomImageURL } from '../../utils/images';

export function RandomImage() {
  const imageURL = selectRandomImageURL();

  return (
    <img
      src={imageURL}
      className='fixed top-0 left-0 w-screen h-screen object-cover'
    />
  );
}
