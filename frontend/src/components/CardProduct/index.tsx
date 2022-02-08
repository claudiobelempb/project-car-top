import Image from 'next/image';
import Link from 'next/link';

import ImgCarRed from 'assets/images/card-red.svg';

const CardProduct: React.FC = () => {
  return (
    <div className='col'>
      <div className='card shadow-sm bg-light border-0 '>
        <Image src={ImgCarRed} className='card-img-top img-fluid' alt='...' />
        <div className='card-body'>
          <h5 className='card-title fs-5 fw-bold text-secondary'>
            Audi Supra TT
          </h5>
          <p className='card-text fst-italic'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <Link href='#'>
            <a className='btn btn-primary btn-sm d-block fw-bold py-3 py-sm-3 py-md-3'>
              COMPRAR
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CardProduct };
