import Image from 'next/image';
import ImgCarYellow from 'assets/images/card-yellow.svg';

const Slider: React.FC = () => {
  return (
    <div>
      <div className='container'>
        <div className='row flex-lg-row-reverse bg-primary rounded-3 mt-4 p-sm-5 p-md-5 p-lg-5 g-2'>
          <div className='col-lg-6 d-flex justify-content-center align-items-center img-fluid mt-4'>
            <Image src={ImgCarYellow} alt='Imagem Carro Amarelo' />
          </div>
          <div className='col-lg-6 text-center text-lg-start mt-4'>
            <h2 className='text-light fw-bold display-5'>
              O carro perfeito para você
            </h2>
            <p className='text-light lead fw-normal mb-4'>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Slider };
