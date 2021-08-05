import cogoToast from 'cogo-toast';

export function useErrorHandler() {
  return (err) => {
    console.log('Something happened and trigered an error:' + err);
    cogoToast.error('Something went wrong!');
  };
}
