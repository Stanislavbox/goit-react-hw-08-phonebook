import { Triangle, ThreeDots } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="blue"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </LoaderWrap>
  );
};

export const BtnLoader = () => {
  return (
    <ThreeDots
      height="12"
      width="12"
      color="orange"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};